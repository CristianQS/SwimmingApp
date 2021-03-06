from behave import *


@given('Accedemos a lá página de acceso de la página web "{url}"')
def step_impl(context, url):
    context.browser.get(url)


@given('observamos la página de "{cabecera}"')
def step_impl(context, cabecera):
    print(cabecera)
    print(context.browser.title)
    assert cabecera in context.browser.title


@when('Rellenamos los campos del formulario con "{user}" y "{password}"')
def step_impl(context, user, password):
    txt_author = context.browser.find_element_by_id('user_id')
    txt_author.send_keys(user)

    txt_email = context.browser.find_element_by_id('user_passwd')
    txt_email.send_keys(password)


@when('Pulsamos en el botón con el id "{btn}"')
def step_impl(context, btn):
    submit_button = context.browser.find_element_by_id(btn)
    submit_button.click()


@then('Se le envía a la página "{url}"')
def step_impl(context, url):
    context.browser.get(url)

##################################################
