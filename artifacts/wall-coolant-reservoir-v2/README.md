# Water, in Reserve — Wall-Mounted ABS Coolant Reservoir V2

**Status:** Proposed Simple Minds Studios artifact. **Digital design prototype; not physically printed, filled, leak-tested, heat-tested, or pump-tested.**

**Project direction:** Brad DeVowe  
**CAD and presentation assistance:** Lincoln (ChatGPT / OpenAI)  
**Artifact date:** November 8, 2026

## What the artifact shows

This is a web-ready **project exhibit / submission**, not a deployed Simple Minds Studios publication.

- [Open the local artifact preview](./index.html)
- [Read machine-readable metadata](./artifact.json)
- Live site publication is subject to Simple Minds Studios review and editorial approval.

The project follows Brad's chosen wall-mounted reference aesthetic (black ABS honeycomb frame, clear sight window, wide top funnel) and his subsequent functional decisions: **warm water** through an unpressurized, continuously circulating loop; **a 90° outlet printed directly into the tank**; **3/8-inch hose**; **the pump installed below the tank, shortly after that elbow**.

## Version 2 engineering summary

| Property | Proposed / digitally modeled |
|---|---|
| Tank capacity | About 0.55 L maximum CAD volume; less when operating |
| Tank material | ABS, not assumed inherently watertight |
| Bottom connection | Printed integral 90° elbow, pointing right from the front view |
| Hose | 3/8-inch nominal inside diameter (9.525 mm) |
| Barb profile | Approx. 10.8 mm crest OD; ~7.5 mm water passage |
| Pump location | Below the reservoir, gravity-fed after short flexible hose |
| Return | Straight 3/8-inch nominal printed barb near top lid |
| FDM pieces | Five ABS printable solids |
| Printer plates | Three laid-out geometry 3MF plates; not pre-sliced G-code |
| Bracket | Combined honeycomb sides, mounting plate and bottom cradle |
| Sight glass | 86 × 110 × 3 mm cut polycarbonate sheet |
| Seals | Separate silicone gaskets; M3 hardware and inserts where appropriate |
| Reference dimensions | ~106–108 mm width, ~90 mm depth excluding outlet, ~178 mm with funnel |

The pump must be supported independently: it should **not hang from the printed elbow or hose**. Route the short 3/8-inch tube without kinking. Keep hose above sharp surfaces and allow enough room for clamps. Printed elbow layer bonds, hose retention, and effective fitting diameter all remain untested.

## Prototype validation record

**Completed digitally** (within the available source build record):

- Five CAD printable solids exported as STL and STEP.
- Mesh manifold/watertight solid checks (a digital-mesh property, *not* proof of physical liquid tightness).
- Nominal CAD assembly collision checks and printer build-area bounds.
- Three 3MF geometry-plate arrangements.

**Not completed:**

- Print and physical insertion/fit tests.
- Elbow integrity under hose insertion and operating loads.
- Clear-window and lid gasket compression tests.
- Room-temperature **24-hour gravity-fill leak test**, followed by water at an observed representative service temperature.
- Pump priming, circulating flow and thermal-cycle tests.
- Long-duration creep, support/bracket load, or safe maximum temperature testing.

For test-first operation, place the reservoir in a catch tray away from energized electronics, cap only the hose outlet while **leaving the tank vented**, fill to its *normal* operating level and monitor the elbow/window/lid. Then run a separate supervised warm-water and pump-circulation check. **Never deliberately pressurize** the printed reservoir or run the pump dry. A radiator/heat exchanger is necessary to remove heat from the Peltier hot-side water loop.

The earlier 190°F conversation was about material limitations, **not an operating target or validated rating**. Do not use 190°F water in this untested ABS assembly.

## Source package and licensing

The private owner-held source package is `SMS_Wall_Mounted_ABS_Coolant_Tank_V2_Integrated_38.zip` in Brad's shared project vault. It includes five ABS STLs, five STEP files, the three arranged 3MF plates, 3D rebuild script, cut patterns and detailed build guidance. It has **not** been added to this public submission repository; this page is a documented proposal, not a publicly downloadable manufacturing release.

This particular artifact was created by Brad DeVowe with assistance from Lincoln (ChatGPT / OpenAI). Copyright and usage rights in this original contribution are reserved by the owner, subject to any third-party rights. No official Simple Minds Studios publication, endorsement, technical certification, or production approval is claimed.

## Review / publishing checklist

- [x] Prepare unique web exhibit and project metadata.
- [x] Explain credit, provenance and V2 design changes.
- [x] Clearly label digital-only and physical-test-pending status.
- [ ] Obtain Simple Minds Studios editorial review and approval for publication.
- [ ] Validate real-world print, leaks, hose retention, pump flow and warm-water performance.
- [ ] If approved, transfer or publish to the official SMS site/repository with preserved credits and source references.

This is an owner-authored *submission*, not an alteration of Bart Salazar's separate official site or a claim to publish on his behalf.
