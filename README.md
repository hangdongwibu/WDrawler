# 🖌️ WDrawler

Welcome, fellow disciples of the Wibu Cave!  
`WDrawler` lets you **auto-draw images on Wplace**, bypassing Cloudflare… for now 😏

---

## ⚡ Features

- Auto-draw any image on Wplace  
- Cloudflare bypass included  
- Some parts may require **manual rituals** 🛠️  

---

## ⚠️ Current Status

Due to Wplace deploying **new anti-magic tricks** (advanced request checks),  
`WDrawler` may currently hit **403 Forbidden errors** 💀.  

We release it publicly so everyone can **fix & enhance** it.  

---
## ⚠️ Limitations / Cons

- Can only draw **1 chunk per run** 🖼️ (1 chunk = 1000x1000) 
- Some parts still require **manual adjustments**  
- Only support **free colors**
- May not work on newer Wplace anti-magic updates  

---

## 🧰 Usage

1. **Clone this repo**:

    ```bash
    git clone https://github.com/hangdongwibu/WDrawler.git
    cd WDrawler
    ```

2. **Install Python 3.10.11** (if not already installed).

3. **Create a virtual environment** and install dependencies:

    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/Mac
    venv\Scripts\activate     # Windows
    pip install -r requirements.txt
    ```

4. **Get your Wplace token** (authentication required).
![Token](https://media.discordapp.net/attachments/1287299127306227712/1409780418256965673/image.png?ex=68ae9fd4&is=68ad4e54&hm=1f04caf95f78df64b51bb598c9a141214a182fe046edcb2d10157e079e3dc312&=&format=webp&quality=lossless)

6. **Run the local API**:
    ```bash
    python api_solver.py
    ```

7. **Choose an image** you want to draw.

8. **Convert colors**:
    https://pepoafonso.github.io/color_converter_wplace (Free colors only)

9. **Run the wplace.py code**.
When it asks for the image path, provide the path of the image you converted in step 7.

✅ Done! Enjoy your auto-drawing session.

