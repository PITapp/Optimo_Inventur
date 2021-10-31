using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OptimoInventur.Models.DbOptimo
{
  [Table("vwBaseOrte")]
  public partial class VwBaseOrte
  {
    [Key]
    public string Ort
    {
      get;
      set;
    }
  }
}
