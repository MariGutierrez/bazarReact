using System;
using System.Collections.Generic;

namespace bazar.Models;

public partial class Metum
{
    public int ProductId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public string? Barcode { get; set; }

    public string? QrCode { get; set; }

    public virtual Product Product { get; set; } = null!;
}
