using System;
using System.Collections.Generic;

namespace bazar.Models;

public partial class Dimension
{
    public int ProductId { get; set; }

    public decimal? Width { get; set; }

    public decimal? Height { get; set; }

    public decimal? Depth { get; set; }

    public virtual Product Product { get; set; } = null!;
}
