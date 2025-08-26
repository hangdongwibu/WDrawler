# 🖌️ Wdrawler

Welcome, fellow disciples of the Wibu Cave!  
`Wdrawler` lets you **auto-draw images on Wplace**, bypassing Cloudflare… for now 😏

---

## ⚡ Features

- Auto-draw any image on Wplace  
- Cloudflare bypass included  
- Some parts may require **manual rituals** 🛠️  

---

## ⚠️ Current Status

Due to Wplace deploying **new anti-magic tricks** (advanced request checks),  
`Wdrawler` may currently hit **403 Forbidden errors** 💀.  

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
    git clone https://github.com/YourUsername/Wdrawler.git
    cd Wdrawler
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

5. **Run the local API**:
    ```bash
    python api_solver.py
    ```

6. **Choose an image** you want to draw.

7. **Convert colors**:
    https://pepoafonso.github.io/color_converter_wplace (Free colors only)

8. **Run the wplace.py code**.
When it asks for the image path, provide the path of the image you converted in step 7.

✅ Done! Enjoy your auto-drawing session.

