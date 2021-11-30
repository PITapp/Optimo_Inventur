using System;
using System.IO;
using System.Text;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Builder;

using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Hosting;

using OptimoInventur.Data;

namespace OptimoInventur
{
  public partial class Startup
  {
    public Startup(IConfiguration configuration, IWebHostEnvironment env)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    partial void OnConfigureServices(IServiceCollection services);

    partial void OnConfiguringServices(IServiceCollection services);

    public void ConfigureServices(IServiceCollection services)
    {
      OnConfiguringServices(services);

      services.AddOptions();
      services.AddLogging(logging =>
      {
          logging.AddConsole();
          logging.AddDebug();
      });

      services.AddCors(options =>
      {
          options.AddPolicy(
              "AllowAny",
              x =>
              {
                  x.AllowAnyHeader()
                  .AllowAnyMethod()
                  .SetIsOriginAllowed(isOriginAllowed: _ => true)
                  .AllowCredentials();
              });
      });
      services.AddMvc(options =>
      {
          options.EnableEndpointRouting = false;

          options.OutputFormatters.Add(new OptimoInventur.Data.XlsDataContractSerializerOutputFormatter());
          options.FormatterMappings.SetMediaTypeMappingForFormat("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

          options.OutputFormatters.Add(new OptimoInventur.Data.CsvDataContractSerializerOutputFormatter());
          options.FormatterMappings.SetMediaTypeMappingForFormat("csv", "text/csv");
      }).AddNewtonsoftJson();

      services.AddAuthorization();
      
          services.AddOData();
          services.AddODataQueryFilter();

      services.AddHttpContextAccessor();

      services.AddDbContext<OptimoInventur.Data.DbOptimoContext>(options =>
      {
        options.UseMySql(Configuration.GetConnectionString("dbOptimoConnection"));
      });

      OnConfigureServices(services);
    }

    partial void OnConfigure(IApplicationBuilder app);


    partial void OnConfigure(IApplicationBuilder app, IWebHostEnvironment env);
    partial void OnConfiguring(IApplicationBuilder app, IWebHostEnvironment env);
    partial void OnConfigureOData(ODataConventionModelBuilder builder);

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {

      OnConfiguring(app, env);

      IServiceProvider provider = app.ApplicationServices.GetRequiredService<IServiceProvider>();
      app.UseCors("AllowAny");
      app.Use(async (context, next) => {
          if (context.Request.Path.Value == "/__ssrsreport" || context.Request.Path.Value == "/ssrsproxy") {
            await next();
            return;
          }
          await next();
          if ((context.Response.StatusCode == 404 || context.Response.StatusCode == 401) && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.Contains("/odata")) {
              context.Request.Path = "/index.html";
              await next();
          }
      });

      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseDeveloperExceptionPage();

      app.UseMvc(builder =>
      {
        if (env.EnvironmentName == "Development")
        {
            builder.MapRoute(name: "default",
              template: "{controller}/{action}/{id?}",
              defaults: new { controller = "Home", action = "Index" }
            );
        }

          builder.Count().Filter().OrderBy().Expand().Select().MaxTop(null).SetTimeZoneInfo(TimeZoneInfo.Utc);
        

          var oDataBuilder = new ODataConventionModelBuilder(provider);

          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.Base>("Bases");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.BaseAnreden>("BaseAnredens");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.BaseKontakte>("BaseKontaktes");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.Benutzer>("Benutzers");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.InfotexteHtml>("InfotexteHtmls");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.InventurArtikel>("InventurArtikels");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.InventurBasis>("InventurBases");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.InventurBasisStatus>("InventurBasisStatuses");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.InventurDevice>("InventurDevices");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.InventurErfassung>("InventurErfassungs");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.Notizen>("Notizens");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.Protokoll>("Protokolls");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwBase>("VwBases");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwBaseAlle>("VwBaseAlles");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwBaseKontakte>("VwBaseKontaktes");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwBaseOrte>("VwBaseOrtes");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwBasePlz>("VwBasePlzs");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwBenutzerBase>("VwBenutzerBases");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwBenutzerRollen>("VwBenutzerRollens");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwInventurArtikel>("VwInventurArtikels");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwInventurErfassung>("VwInventurErfassungs");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwInventurErfassungSummen>("VwInventurErfassungSummens");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwInventurLagerorte>("VwInventurLagerortes");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwInventurLagerorteMitSummen>("VwInventurLagerorteMitSummens");
          oDataBuilder.EntitySet<OptimoInventur.Models.DbOptimo.VwRollen>("VwRollens");

          this.OnConfigureOData(oDataBuilder);

          var model = oDataBuilder.GetEdmModel();

          builder.MapODataServiceRoute("odata/dbOptimo", "odata/dbOptimo", model);

      });


      if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("RADZEN")) && env.IsDevelopment())
      {
        app.UseSpa(spa =>
        {
          spa.Options.SourcePath = "../client";
          spa.UseAngularCliServer(npmScript: "start -- --port 8000 --open");
        });
      }

      OnConfigure(app);
      OnConfigure(app, env);
    }
  }
}
