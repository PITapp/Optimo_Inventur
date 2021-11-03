using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OptimoInventur.Models.DbOptimo
{
  [Table("InventurArtikel")]
  public partial class InventurArtikel
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ArtikelID
    {
      get;
      set;
    }


    public ICollection<InventurErfassung> InventurErfassungs { get; set; }
    public int InventurID
    {
      get;
      set;
    }

    public InventurBasis InventurBasis { get; set; }
    public int ZeilenNr
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
    public string Status
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