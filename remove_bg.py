from PIL import Image

def remove_background(image_path, output_path):
    img = Image.open(image_path).convert('RGBA')
    data = img.getdata()
    
    new_data = []
    # Get the background color from top-left pixel
    bg_color = data[0]
    
    # tolerance for color matching
    tolerance = 40
    
    for item in data:
        r, g, b, a = item
        # If the pixel is similar to the background color, make it transparent
        if (abs(r - bg_color[0]) < tolerance and 
            abs(g - bg_color[1]) < tolerance and 
            abs(b - bg_color[2]) < tolerance):
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, 'PNG')
    print('Background removed and saved to', output_path)

remove_background('public/images/logo.png', 'public/images/logo_transparent.png')
