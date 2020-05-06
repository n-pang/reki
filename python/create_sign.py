import numpy
from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw


def draw_text_at_center(img, text):
    draw = ImageDraw.Draw(img)
    draw.font = ImageFont.truetype(r'/System/Library/Fonts/Supplemental/AppleGothic.ttf', 90)

    img_size = numpy.array(img.size)
    txt_size = numpy.array(draw.font.getsize(text))
    pos = (img_size - txt_size) / 2

    draw.ellipse((0, 0, img.width, img.height), outline=(255, 0, 0), width=3)
    draw.text(pos, text, (255, 0, 0))


blank_image = Image.new("RGBA", (100, 100), 'white')
text = "楊"
draw_text_at_center(blank_image, text)
rgb_im = blank_image.convert('RGB')
rgb_im.save('_name.jpg')
