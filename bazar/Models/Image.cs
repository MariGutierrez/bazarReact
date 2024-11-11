using System;
using System.Collections.Generic;

namespace bazar.Models;

public partial class Image
{
    public int ProductId { get; set; }

    public string Url { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
