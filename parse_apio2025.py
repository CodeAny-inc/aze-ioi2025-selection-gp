import time
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)

try:
    driver.get("https://ranking.apio2025.uz/")
    time.sleep(5)

    table = driver.find_element(By.TAG_NAME, "table")
    rows = table.find_elements(By.TAG_NAME, "tr")

    headers = [header.text for header in rows[0].find_elements(By.TAG_NAME, "th")]
    azerbaijani_students = []

    for row in rows[1:]:
        cells = row.find_elements(By.TAG_NAME, "td")
        if cells:
            row_data = [cell.text for cell in cells]
            for id in range(1, 100):
                if f"AZE_{id}" in row_data:
                    azerbaijani_students.append(row_data)

    if "Rank" in headers:
        rank_index = headers.index("Rank")
        headers_with_rank = headers[:rank_index] + ["local_rank_position"] + headers[rank_index:]
        for idx, student in enumerate(azerbaijani_students, start=1):
            student.insert(rank_index, idx)
    else:
        headers_with_rank = headers + ["local_rank_position"]
        for idx, student in enumerate(azerbaijani_students, start=1):
            student.append(idx)

    df = pd.DataFrame(azerbaijani_students, columns=headers_with_rank)
    df.to_csv("ranking_ioi_selection_day1.csv", index=False)
    print("Data saved to 'ranking_ioi_selection_day1.csv'.")

finally:
    driver.quit()
