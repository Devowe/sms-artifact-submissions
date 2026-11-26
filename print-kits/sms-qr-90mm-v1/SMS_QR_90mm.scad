// Simple Minds Studios QR plaque, v1, 2026-11-26.
// Creative direction: Brad DeVowe. CAD assistance: Lincoln / OpenAI ChatGPT.
// Encodes exactly: https://www.simplemindsstudios.com
// Print flat with the code upward. White until z=2.4 mm; black above.
// 90 x 90 x 3.2 mm. The STL in this folder has been digitally checked.
// This editable SCAD source has not been rendered in OpenSCAD in this session.

side_mm = 90;
module_mm = 2.4;
base_mm = 2.4;
relief_mm = 0.8;
corner_mm = 0.04; // Tiny chamfers remove diagonal-only point contacts.
margin_mm = (side_mm - 29 * module_mm) / 2;
qr_rows = [
  "11111110001001001001001111111",
  "10000010101010111001001000001",
  "10111010011011101000001011101",
  "10111010001111110011001011101",
  "10111010111010100001001011101",
  "10000010010011000001001000001",
  "11111110101010101010101111111",
  "00000000000101101110100000000",
  "10101010011110111101100010010",
  "01100101010100110110101001001",
  "00010011001001000000001000111",
  "10111100100000011101001010010",
  "11000111001010011101111001011",
  "10100101101011001110111101001",
  "10110011100110100000000101011",
  "11011101111001101111100001010",
  "01100011011000111101111101011",
  "00010001010110101100111001101",
  "10000011011111000000010100011",
  "01100001011000000101100001010",
  "10110111100010001100111110000",
  "00000000100101001001100010111",
  "11111110010000101011101011011",
  "10000010000011101110100011011",
  "10111010100110111100111110001",
  "10111010001000100001000010111",
  "10111010101000000101010111001",
  "10000010001101100111110010010",
  "11111110111001100101101111011"
];
function dark(r,c) = (r < 0 || r >= 29 || c < 0 || c >= 29) ? false : qr_rows[r][c] == "1";
assert(margin_mm >= 4 * module_mm, "Keep at least four modules of white quiet zone.");
assert(base_mm > 0 && relief_mm > 0 && corner_mm > 0 && corner_mm < module_mm/4);
module pixel(r,c) {
  m = module_mm;
  t = corner_mm;
  cut = [
    dark(r+1,c-1) && !dark(r,c-1) && !dark(r+1,c),
    dark(r+1,c+1) && !dark(r,c+1) && !dark(r+1,c),
    dark(r-1,c+1) && !dark(r,c+1) && !dark(r-1,c),
    dark(r-1,c-1) && !dark(r,c-1) && !dark(r-1,c)
  ];
  outline = [[0,0],[t,0],[m-t,0],[m,0],[m,t],[m,m-t],
             [m,m],[m-t,m],[t,m],[0,m],[0,m-t],[0,t]];
  translate([margin_mm+c*m, margin_mm+(28-r)*m, base_mm])
    linear_extrude(height=relief_mm)
      polygon(points=[for(k=[0:11]) if(k%3 != 0 || !cut[k/3]) outline[k]]);
}
union() {
  color("white") cube([side_mm, side_mm, base_mm]);
  color("black") for(r=[0:28]) for(c=[0:28]) if(dark(r,c)) pixel(r,c);
}
