using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OptimoInventur.Models.DbOptimo
{
  [Table("vwInventurErfassung")]
  public partial class VwInventurErfassung
  {
    public int ErfassungID
    {
      get;
      set;
    }
    [Key]
    public int ArtikelID
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
    public string Artikelnummer
    {
      get;
      set;
    }
    public string Beschreibung
    {
      get;
      set;
    }
    public string Beschreibung2
    {
      get;
      set;
    }
    public string StdKreditorName
    {
      get;
      set;
    }
  }
}
