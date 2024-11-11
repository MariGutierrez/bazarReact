using System;
using System.Collections.Generic;

namespace bazar.Models;

public partial class Tag
{
    public int ProductId { get; set; }

    public string Tag1 { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
