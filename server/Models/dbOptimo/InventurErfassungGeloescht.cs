using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OptimoInventur.Models.DbOptimo
{
  [Table("InventurErfassungGeloescht")]
  public partial class InventurErfassungGeloescht
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ErfassungGeloeschtID
    {
      get;
      set;
    }
    public int ArtikelID
    {
      get;
      set;
    }

    public InventurArtikel InventurArtikel { get; set; }
    public DateTime GeloeschtAm
    {
      get;
      set;
    }
    public DateTime ErfasstAm
    {
      get;
      set;
    }
    public int ErfasstAnzahl
    {
      get;
      set;
    }
    public string Notiz
    {
      get;
      set;
    }
  }
}
