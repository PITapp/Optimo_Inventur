using System;
using System.Net;
using System.Data;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using Microsoft.AspNet.OData.Query;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;



namespace OptimoInventur.Controllers.DbOptimo
{
  using Models;
  using Data;
  using Models.DbOptimo;

  [ODataRoutePrefix("odata/dbOptimo/InventurErfassungGeloeschts")]
  [Route("mvc/odata/dbOptimo/InventurErfassungGeloeschts")]
  public partial class InventurErfassungGeloeschtsController : ODataController
  {
    private Data.DbOptimoContext context;

    public InventurErfassungGeloeschtsController(Data.DbOptimoContext context)
    {
      this.context = context;
    }
    // GET /odata/DbOptimo/InventurErfassungGeloeschts
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbOptimo.InventurErfassungGeloescht> GetInventurErfassungGeloeschts()
    {
      var items = this.context.InventurErfassungGeloeschts.AsQueryable<Models.DbOptimo.InventurErfassungGeloescht>();
      this.OnInventurErfassungGeloeschtsRead(ref items);

      return items;
    }

    partial void OnInventurErfassungGeloeschtsRead(ref IQueryable<Models.DbOptimo.InventurErfassungGeloescht> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{ErfassungGeloeschtID}")]
    public SingleResult<InventurErfassungGeloescht> GetInventurErfassungGeloescht(int key)
    {
        var items = this.context.InventurErfassungGeloeschts.Where(i=>i.ErfassungGeloeschtID == key);
        this.OnInventurErfassungGeloeschtsGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnInventurErfassungGeloeschtsGet(ref IQueryable<Models.DbOptimo.InventurErfassungGeloescht> items);

    partial void OnInventurErfassungGeloeschtDeleted(Models.DbOptimo.InventurErfassungGeloescht item);

    [HttpDelete("{ErfassungGeloeschtID}")]
    public IActionResult DeleteInventurErfassungGeloescht(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.InventurErfassungGeloeschts
                .Where(i => i.ErfassungGeloeschtID == key)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnInventurErfassungGeloeschtDeleted(itemToDelete);
            this.context.InventurErfassungGeloeschts.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnInventurErfassungGeloeschtUpdated(Models.DbOptimo.InventurErfassungGeloescht item);

    [HttpPut("{ErfassungGeloeschtID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutInventurErfassungGeloescht(int key, [FromBody]Models.DbOptimo.InventurErfassungGeloescht newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.ErfassungGeloeschtID != key))
            {
                return BadRequest();
            }

            this.OnInventurErfassungGeloeschtUpdated(newItem);
            this.context.InventurErfassungGeloeschts.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.InventurErfassungGeloeschts.Where(i => i.ErfassungGeloeschtID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "InventurArtikel");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{ErfassungGeloeschtID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchInventurErfassungGeloescht(int key, [FromBody]Delta<Models.DbOptimo.InventurErfassungGeloescht> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.InventurErfassungGeloeschts.Where(i => i.ErfassungGeloeschtID == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnInventurErfassungGeloeschtUpdated(itemToUpdate);
            this.context.InventurErfassungGeloeschts.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.InventurErfassungGeloeschts.Where(i => i.ErfassungGeloeschtID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "InventurArtikel");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnInventurErfassungGeloeschtCreated(Models.DbOptimo.InventurErfassungGeloescht item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbOptimo.InventurErfassungGeloescht item)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (item == null)
            {
                return BadRequest();
            }

            this.OnInventurErfassungGeloeschtCreated(item);
            this.context.InventurErfassungGeloeschts.Add(item);
            this.context.SaveChanges();

            var key = item.ErfassungGeloeschtID;

            var itemToReturn = this.context.InventurErfassungGeloeschts.Where(i => i.ErfassungGeloeschtID == key);

            Request.QueryString = Request.QueryString.Add("$expand", "InventurArtikel");

            return new ObjectResult(SingleResult.Create(itemToReturn))
            {
                StatusCode = 201
            };
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
