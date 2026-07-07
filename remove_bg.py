from rembg import remove
from PIL import Image
import os

def process_logo(input_path, output_path):
    print(f"Processing {input_path}...")
    if not os.path.exists(input_path):
        print(f"File {input_path} not found.")
        return
    input_image = Image.open(input_path)
    # Using alpha matting for smooth edges
    output_image = remove(
        input_image, 
        alpha_matting=True, 
        alpha_matting_foreground_threshold=240, 
        alpha_matting_background_threshold=10, 
        alpha_matting_erode_size=5
    )
    # Save as transparent PNG
    output_image.save(output_path, "PNG")
    print(f"Saved to {output_path}")

rlogo_path = "k:/code/intern/Rashtrahit28Marketing/public/images/logo/rlogo.png"
slogo_path = "k:/code/intern/Rashtrahit28Marketing/public/images/logo/slogo.png"

# Process in place
process_logo(rlogo_path, rlogo_path)
# process_logo(slogo_path, slogo_path)
