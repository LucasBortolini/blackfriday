---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Black Friday 2021 - Site OFICIAL | Ofertas e Promoções Exclusivas

sections:
  - banner
  - when
  - what
  - blog

banner: assets/images/appliances.png

when:
  title: Quando é a
  image: assets/images/when.png
  paragraphs: 
    - Em 2021 a Black Friday será no dia 26 de Novembro. A data mais esperada com ofertas do Brasil está chegando!
    - O evento acontece sempre na sexta-feira, após o feriado de ação de graças nos Estados Unidos.
    - Coloque a data no seu calendário e prepare-se para se juntar a milhões de consumidores em todo o mundo que irão fazer negócios incríveis comprando os produtos de seus sonhos.

what:
  title: O que significa
  image: assets/images/what.png
  paragraphs:
    - A tradução de Black Friday é "Sexta feira Negra". Na prática ela tem o significado da maior data de ofertas do Brasil!
    - A origem exata ninguém sabe dizer ao certo, há quem diga que a expressão nasceu no final do século XIX após duas instituições financeiras terem quebrado no mesmo dia em plena corrida do ouro. Coincidentemente, em uma sexta-feira.
    - Outra teoria conhecida é que o termo foi criado por policiais da Filadélfia na década de 60 para se referir ao dia após o feriado do Dia de Ação de Graças em que o trânsito se tornou um caos. Graças a isso, surgiu então uma grande oportunidade de venda para os lojistas que se aproveitavam disso e faziam diversas promoções para atrair quem passasse por lá.
    - Essa referência ao trânsito logo se expandiu e se tornou uma expressão local às ofertas, se transformando em uma grande tradição de compras.
    - No Brasil, a Black Friday chegou em 2011 com o portal Busca Descontos, e desde então cresce exponencialmente, batendo recorde de vendas ano a ano.
    - Diferentemente dos Estados Unidos, a Black Friday no Brasil começou como um evento exclusivamente online que passou para o varejo físico e atualmente atinge desde o pequeno até o grande varejista.

faq:
  - question:
    answer:

---

{% for section in page.sections %}
  {% include {{ section }}.html %}
{% endfor %}