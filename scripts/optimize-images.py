#!/usr/bin/env python3
"""Optimize Varq screenshots for web delivery."""

import os
import base64
from pathlib import Path
from PIL import Image

SCREENSHOTS_DIR = Path("/Users/pratikrai/Development/varq-website/public/screenshots")
MAX_WIDTH = 1600
WEBP_QUALITY = 85
PLACEHOLDER_WIDTH = 40
PLACEHOLDER_QUALITY = 30

def process_image(png_path: Path):
    """Resize PNG to WebP + generate tiny base64 blur placeholder."""
    name = png_path.stem
    print(f"\nProcessing: {png_path.name}")

    img = Image.open(png_path)
    original_size = png_path.stat().st_size
    print(f"  Original: {img.size[0]}x{img.size[1]} — {original_size / 1024 / 1024:.1f} MB")

    # --- Main optimized WebP ---
    ratio = min(MAX_WIDTH / img.width, 1.0)
    new_size = (int(img.width * ratio), int(img.height * ratio))
    main = img.resize(new_size, Image.LANCZOS)
    webp_path = SCREENSHOTS_DIR / f"{name}.webp"
    main.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)
    main_size = webp_path.stat().st_size
    print(f"  WebP ({new_size[0]}x{new_size[1]}): {main_size / 1024:.0f} KB ({(1 - main_size/original_size)*100:.0f}% smaller)")

    # --- Tiny placeholder for blur-up effect ---
    ph_ratio = min(PLACEHOLDER_WIDTH / img.width, 1.0)
    ph_size = (int(img.width * ph_ratio), int(img.height * ph_ratio))
    placeholder = img.resize(ph_size, Image.LANCZOS)
    ph_path = SCREENSHOTS_DIR / f"{name}-placeholder.webp"
    placeholder.save(ph_path, "WEBP", quality=PLACEHOLDER_QUALITY, method=6)

    # Base64 encode the tiny placeholder
    with open(ph_path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode("ascii")
    data_uri = f"data:image/webp;base64,{b64}"
    print(f"  Placeholder: {ph_size[0]}x{ph_size[1]} — base64 length: {len(data_uri)} chars")

    # Write base64 to a .txt file for easy import
    txt_path = SCREENSHOTS_DIR / f"{name}-placeholder.txt"
    txt_path.write_text(data_uri)
    print(f"  Saved base64 to: {txt_path.name}")

    # --- Also create a 2x retina version (800 CSS px) for mobile ---
    mobile_width = 800
    mob_ratio = min(mobile_width / img.width, 1.0)
    mob_size = (int(img.width * mob_ratio), int(img.height * mob_ratio))
    mobile = img.resize(mob_size, Image.LANCZOS)
    mobile_path = SCREENSHOTS_DIR / f"{name}-mobile.webp"
    mobile.save(mobile_path, "WEBP", quality=WEBP_QUALITY, method=6)
    mobile_size = mobile_path.stat().st_size
    print(f"  Mobile ({mob_size[0]}x{mob_size[1]}): {mobile_size / 1024:.0f} KB")

    return {
        "name": name,
        "webp": webp_path.name,
        "mobile": mobile_path.name,
        "placeholder_txt": txt_path.name,
        "base64": data_uri,
    }

if __name__ == "__main__":
    results = []
    for png in sorted(SCREENSHOTS_DIR.glob("*.png")):
        results.append(process_image(png))

    # Print summary for easy copy-paste
    print("\n" + "="*50)
    print("SUMMARY")
    print("="*50)
    for r in results:
        print(f"\n{r['name']}:")
        print(f"  webp: /screenshots/{r['webp']}")
        print(f"  mobile: /screenshots/{r['mobile']}")
