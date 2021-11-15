using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OptimoInventur.Models.DbOptimo
{
  [Table("InventurErfassung")]
  public partial class InventurErfassung
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ErfassungID
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
