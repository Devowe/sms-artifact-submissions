# Simple Minds Studios QR plaque

A 90 x 90 mm plaque linking directly to **https://www.simplemindsstudios.com**.

Creative direction: **Brad DeVowe**. CAD and validation assistance: **Lincoln / OpenAI ChatGPT**. Version 1, November 26, 2026.

## Files

- **SMS_QR_90mm.stl** — ready to import; one watertight mesh, millimeters.
- **SMS_QR_90mm.scad** — editable OpenSCAD source.
- **make-qr.mjs** — Node.js rebuild source; no npm dependencies.
- **validation.json** — exact dimensions and digital checks.

## Print on the Bambu P2S with AMS

1. Download **SMS_QR_90mm.stl** using GitHub's **Download raw file** button and open it in Bambu Studio.
2. Choose your **P2S**, your installed **0.4 mm nozzle**, and matching **white PLA** and **black PLA** filament profiles. Load both into the AMS.
3. Keep the broad flat back on the bed and the raised QR code facing up. Import as **millimeters** and retain **100% scale**. Expected bounds: **90 x 90 x 3.2 mm**.
4. Set both the **layer height** and **initial layer height** to **0.20 mm**. Use **3 walls**, **4 top and 4 bottom layers**, and **15% infill** as a starting point. **Supports: off.** Variable layer height: off.
5. Assign **white** as the initial filament. Slice the model.
6. In **Preview**, locate the **first layer of raised QR squares**: with the settings above this is **layer 13**, whose top is at **Z = 2.60 mm**. Right-click that layer's slider marker and choose **Change Filament**, then select **black**. This changes the filament **before** the first raised layer prints, after the white base has reached **2.40 mm**. Re-slice if requested.
7. Verify the color preview: **12 white layers** followed by **4 black layers**, with one color change. All base and quiet-zone surfaces must remain white; every raised QR surface must finish black.
8. Print one plaque. Let it cool, then scan it with your phone before printing more. The expected link is **https://www.simplemindsstudios.com**.

If your layer heights differ, use the geometry boundary at **Z = 2.40 mm** and inspect the first raised layer instead of relying on layer number 13.

## Without AMS

Use the same geometry and colors, with a **pause before the first raised layer**. After the white base finishes at Z = 2.40 mm, load black filament, purge it away from the model until the extrusion is black, clear the purge, and resume. A manual swap uses a pause; an AMS filament-change command alone does not request a manual swap.

## Keep it scannable

- The base is **2.4 mm** thick; the relief is **0.8 mm**; the finished plaque is **3.2 mm** thick.
- Individual QR modules are **2.4 mm** wide. The white border is **10.2 mm** on every side, slightly more than four modules.
- Keep the white border clear. Avoid transparent, glitter, silk, or strongly glossy filament on the scanning face.
- Tiny **0.04 mm** chamfers separate diagonal-only contacts so the exported mesh is manifold. They do not change the 29 x 29 module data. A top-down raster of the actual mesh decoded successfully with jsQR.
- Print at the supplied size for the first test. A successful digital decode does not establish a successful physical print or scan.

## Validation

The exported STL was re-parsed and checked for edge pairing, vertex manifoldness, outward orientation, positive volume, dimensional bounds, degenerate and duplicate triangles, and the encoded QR pattern. See **validation.json**.

An independent jsQR decoder read the correct target URL from a rasterized top-down view of the actual 3D mesh. **No physical printing, Bambu Studio slicing, print-time estimate, or physical scan is claimed.**

The STL has no saved colors or printer settings. The filament change is configured in Bambu Studio using the steps above. Save your successful sliced setup as a P2S 3MF for reuse.

## Provenance

This is a working printable design for Brad's own submission archive. It does not establish official Simple Minds Studios publication or approval. It uses the exact website address Brad requested, with no tracking or redirect service added.

The current [SMS standards working draft](https://github.com/Simple-Minds-Studios/sms-standards/blob/main/README.md), blob ca307919cb6017c5550de4ff80ebe11eee597d60, was read before creation. That draft describes continuity and planned brand chapters; it does not prescribe additional QR or print-specific geometry rules. Credits live here and in the source files so the scanning area stays clear.
