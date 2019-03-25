from selenium import webdriver

def before_all(context):
    print("Executing before all")

def before_feature(context, feature):
    print("Before feature\n")

# Scenario level objects are popped off context when scenario exits
def before_scenario(context, scenario):
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_experimental_option("detach", True)
    context.browser = webdriver.Chrome(r'C:\Users\Cristian\Desktop\TFT\SwimmingApp\chromedriver_win32\chromedriver.exe',
                                       chrome_options=chrome_options)
    print("Before scenario\n")


def after_scenario(context, scenario):
    context.browser.quit()
    print("After scenario\n")

def after_feature(context, feature):
    print("\nAfter feature")

def after_all(context):
    print("Executing after all")
