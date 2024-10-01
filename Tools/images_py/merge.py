from PIL import Image
import os
import math

def create_sprite(image_folder, output_image, image_size=(64, 64)):
    # 이미지 파일을 불러옴 (숫자 순서대로 정렬)
    images = sorted([f for f in os.listdir(image_folder) if f.endswith('.webp')], key=lambda x: int(os.path.splitext(x)[0]))
    
    # 이미지의 수
    num_images = len(images)
    
    # 가로 칸 수 (적절한 비율로 가로 크기를 32로 설정)
    columns = 32
    
    # 세로 칸 수 계산 (이미지 개수에 따라 자동 계산)
    rows = math.ceil(num_images / columns)
    
    # 스프라이트 이미지의 전체 크기 계산
    sprite_width = columns * image_size[0]
    sprite_height = rows * image_size[1]
    
    # 빈 스프라이트 이미지 생성
    sprite_image = Image.new('RGBA', (sprite_width, sprite_height))
    
    # 각 이미지를 스프라이트 이미지에 붙여넣기
    for index, image_file in enumerate(images):
        img = Image.open(os.path.join(image_folder, image_file)).resize(image_size, Image.Resampling.LANCZOS)
        x_offset = (index % columns) * image_size[0]
        y_offset = (index // columns) * image_size[1]
        sprite_image.paste(img, (x_offset, y_offset))
    
    # 스프라이트 이미지 저장
    sprite_image.save(output_image)

# 이미지 폴더와 출력 파일 설정
image_folder = './sprite_pokemon_images_webp'  # 이미지가 저장된 폴더 경로
output_image = 'sprite_image.webp'    # 출력할 스프라이트 이미지 파일명

# 스프라이트 이미지 생성
create_sprite(image_folder, output_image)
