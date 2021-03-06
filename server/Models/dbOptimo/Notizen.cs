using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OptimoInventur.Models.DbOptimo
{
  [Table("Notizen")]
  public partial class Notizen
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int NotizID
    {
      get;
      set;
    }
    public int? LinkID
    {
      get;
      set;
    }
    public DateTime Am
    {
      get;
      set;
    }
    public string Titel
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
