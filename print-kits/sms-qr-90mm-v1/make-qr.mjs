// Simple Minds Studios QR plaque v1. Brad DeVowe / Lincoln, 2026-11-26.
// Node.js source with no npm dependencies. Run: node make-qr.mjs
// Writes the same millimeter STL checked during the design session.
import { writeFileSync } from "node:fs";
const matrix = [[true,true,true,true,true,true,true,false,false,false,true,false,false,true,false,false,true,false,false,true,false,false,true,true,true,true,true,true,true],[true,false,false,false,false,false,true,false,true,false,true,false,true,false,true,true,true,false,false,true,false,false,true,false,false,false,false,false,true],[true,false,true,true,true,false,true,false,false,true,true,false,true,true,true,false,true,false,false,false,false,false,true,false,true,true,true,false,true],[true,false,true,true,true,false,true,false,false,false,true,true,true,true,true,true,false,false,true,true,false,false,true,false,true,true,true,false,true],[true,false,true,true,true,false,true,false,true,true,true,false,true,false,true,false,false,false,false,true,false,false,true,false,true,true,true,false,true],[true,false,false,false,false,false,true,false,false,true,false,false,true,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true],[true,true,true,true,true,true,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,true,true,true,true,true,true],[false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,false,true,true,true,false,true,false,false,false,false,false,false,false,false],[true,false,true,false,true,false,true,false,false,true,true,true,true,false,true,true,true,true,false,true,true,false,false,false,true,false,false,true,false],[false,true,true,false,false,true,false,true,false,true,false,true,false,false,true,true,false,true,true,false,true,false,true,false,false,true,false,false,true],[false,false,false,true,false,false,true,true,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,true,true,true],[true,false,true,true,true,true,false,false,true,false,false,false,false,false,false,true,true,true,false,true,false,false,true,false,true,false,false,true,false],[true,true,false,false,false,true,true,true,false,false,true,false,true,false,false,true,true,true,false,true,true,true,true,false,false,true,false,true,true],[true,false,true,false,false,true,false,true,true,false,true,false,true,true,false,false,true,true,true,false,true,true,true,true,false,true,false,false,true],[true,false,true,true,false,false,true,true,true,false,false,true,true,false,true,false,false,false,false,false,false,false,false,true,false,true,false,true,true],[true,true,false,true,true,true,false,true,true,true,true,false,false,true,true,false,true,true,true,true,true,false,false,false,false,true,false,true,false],[false,true,true,false,false,false,true,true,false,true,true,false,false,false,true,true,true,true,false,true,true,true,true,true,false,true,false,true,true],[false,false,false,true,false,false,false,true,false,true,false,true,true,false,true,false,true,true,false,false,true,true,true,false,false,true,true,false,true],[true,false,false,false,false,false,true,true,false,true,true,true,true,true,false,false,false,false,false,false,false,true,false,true,false,false,false,true,true],[false,true,true,false,false,false,false,true,false,true,true,false,false,false,false,false,false,true,false,true,true,false,false,false,false,true,false,true,false],[true,false,true,true,false,true,true,true,true,false,false,false,true,false,false,false,true,true,false,false,true,true,true,true,true,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,true,false,true,false,false,true,false,false,true,true,false,false,false,true,false,true,true,true],[true,true,true,true,true,true,true,false,false,true,false,false,false,false,true,false,true,false,true,true,true,false,true,false,true,true,false,true,true],[true,false,false,false,false,false,true,false,false,false,false,false,true,true,true,false,true,true,true,false,true,false,false,false,true,true,false,true,true],[true,false,true,true,true,false,true,false,true,false,false,true,true,false,true,true,true,true,false,false,true,true,true,true,true,false,false,false,true],[true,false,true,true,true,false,true,false,false,false,true,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,true,true,true],[true,false,true,true,true,false,true,false,true,false,true,false,false,false,false,false,false,true,false,true,false,true,false,true,true,true,false,false,true],[true,false,false,false,false,false,true,false,false,false,true,true,false,true,true,false,false,true,true,true,true,true,false,false,true,false,false,true,false],[true,true,true,true,true,true,true,false,true,true,true,false,false,true,true,false,false,true,false,true,true,false,true,true,true,true,false,true,true]];
const buildQrMesh = function buildQrMesh(matrix) {
  const n=matrix.length, side=9000, pitch=240, margin=(side-n*pitch)/2, inset=4, zBase=240, zTop=320;
  const axis=[0,...Array.from({length:n+1},(_,i)=>margin+i*pitch),side];
  const cells=axis.length-1, verts=[], faces=[], indices=new Map();
  const black=(i,j)=>i>=1&&i<=n&&j>=1&&j<=n&&matrix[n-j][i-1];
  const vertex=(p)=>{const k=p.join(",");if(!indices.has(k)){indices.set(k,verts.length);verts.push(p);}return indices.get(k);};
  const tri=(a,b,c)=>faces.push([vertex(a),vertex(b),vertex(c)]);
  const wall=(a,b,z0,z1)=>{tri([...a,z0],[...b,z0],[...b,z1]);tri([...a,z0],[...b,z1],[...a,z1]);};
  let cutCorners=0;
  for(let j=0;j<cells;j++)for(let i=0;i<cells;i++){
    const x0=axis[i],x1=axis[i+1],y0=axis[j],y1=axis[j+1],raised=black(i,j),h=raised?zTop:zBase;
    const full=[[x0,y0],[x0+inset,y0],[x1-inset,y0],[x1,y0],[x1,y0+inset],[x1,y1-inset],[x1,y1],[x1-inset,y1],[x0+inset,y1],[x0,y1],[x0,y1-inset],[x0,y0+inset]];
    const cut=raised?[
      black(i-1,j-1)&&!black(i-1,j)&&!black(i,j-1),
      black(i+1,j-1)&&!black(i+1,j)&&!black(i,j-1),
      black(i+1,j+1)&&!black(i+1,j)&&!black(i,j+1),
      black(i-1,j+1)&&!black(i-1,j)&&!black(i,j+1)
    ]:[false,false,false,false];
    const poly=full.filter((_,k)=>k%3!==0||!cut[k/3]);
    const center=[(x0+x1)/2,(y0+y1)/2,h];
    for(let k=0;k<poly.length;k++)tri(center,[...poly[k],h],[...poly[(k+1)%poly.length],h]);
    for(let c=0;c<4;c++)if(cut[c]){
      const k=c*3;tri([...full[(k+11)%12],zBase],[...full[k],zBase],[...full[(k+1)%12],zBase]);cutCorners++;
    }
    if(raised)for(let k=0;k<poly.length;k++){
      const a=poly[k],b=poly[(k+1)%poly.length];let boundary=true;
      if(a[0]===x0&&b[0]===x0)boundary=!black(i-1,j);
      else if(a[0]===x1&&b[0]===x1)boundary=!black(i+1,j);
      else if(a[1]===y0&&b[1]===y0)boundary=!black(i,j-1);
      else if(a[1]===y1&&b[1]===y1)boundary=!black(i,j+1);
      if(boundary)wall(a,b,zBase,zTop);
    }
  }
  const perimeterAxis=[];for(let i=0;i<cells;i++)perimeterAxis.push(axis[i],axis[i]+inset,axis[i+1]-inset);perimeterAxis.push(side);
  const outer=[
    ...perimeterAxis.map(x=>[x,0]),
    ...perimeterAxis.slice(1).map(y=>[side,y]),
    ...perimeterAxis.slice(0,-1).reverse().map(x=>[x,side]),
    ...perimeterAxis.slice(1,-1).reverse().map(y=>[0,y])
  ];
  for(let k=0;k<outer.length;k++){const a=outer[k],b=outer[(k+1)%outer.length];tri([side/2,side/2,0],[...b,0],[...a,0]);wall(a,b,0,zBase);}
  return {verts,faces,cutCorners,spec:{side_mm:side/100,pitch_mm:pitch/100,margin_mm:margin/100,base_mm:zBase/100,relief_mm:(zTop-zBase)/100,total_mm:zTop/100,diagonal_corner_chamfer_mm:inset/100}};
};
const stlText = function stlText(mesh){
 const coord=n=>Number((n/100).toFixed(5)).toString();
 const lines=["solid SMS_QR_90mm_Brad_DeVowe_Lincoln_v1"];
 for(const face of mesh.faces){
  const [a,b,c]=face.map(i=>mesh.verts[i]),u=b.map((v,i)=>v-a[i]),v=c.map((q,i)=>q-a[i]);
  const normal=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],len=Math.hypot(...normal);
  lines.push("facet normal "+normal.map(n=>Number((n/len).toFixed(8))).join(" ")," outer loop");
  for(const p of [a,b,c])lines.push("  vertex "+p.map(coord).join(" "));
  lines.push(" endloop","endfacet");
 }
 lines.push("endsolid SMS_QR_90mm_Brad_DeVowe_Lincoln_v1","");
 return lines.join("\n");
};
writeFileSync(new URL("./SMS_QR_90mm.stl", import.meta.url), stlText(buildQrMesh(matrix)), "utf8");
console.log("Created SMS_QR_90mm.stl (90 x 90 x 3.2 mm).");
