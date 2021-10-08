---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Black Friday 2021 - Site OFICIAL | Ofertas e Promoções Exclusivas

sections:
  - banner
  - when
  - what
  - faq

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
  title: Tem alguma dúvida?
  questions: 
    - question: Que dia acontecerá o Black Friday no Brasil? 
      answer: Em 2021, o evento ocorre no dia 26 de Novembro, última sexta-feira do mês.
    - question: Quem são os idealizadores do Black Friday no Brasil?
      answer: A Black Friday chegou ao Brasil em 2011, com o portal Busca Descontos, e desde então cresce exponencialmente, batendo recorde de vendas ano a ano.
    - question: O que é a Black Friday?
      answer: A Black Friday é uma campanha de vendas que traz descontos relevantes em produtos de todas as categorias, como smartphones, notebooks, eletrodomésticos, TVs, roupas, calçados, livros e muito mais. A grande vantagem da Black Friday é aproveitar os altos descontos. Além da economia, você não passa pelo stress e cansaço de comprar tudo na última hora. Nada como aquela tranquilidade no fim do ano, né?
    - question: O que é o Busca Descontos?
      answer: Pioneiro em Cupons, Ofertas e Big Dates do Brasil, o Busca Descontos desde 2010 oferece para os e-consumidores de todo o país ofertas e cupons de descontos nos maiores e melhores lojistas. 
        Também promove as datas mais importantes do comércio eletrônico, como Black Friday, Cyber Monday, Brasil Game Day, Boxing Week, Mega Saldão e Dia do Frete Grátis.
    - question: Quais lojas estarão participando? As lojas físicas também participam?
      answer: Confira todas nossas lojas participantes na home do nosso site www.blackfriday.com.br. Exceto por elas, não respondemos por atitudes de quaisquer outras lojas, sejam elas positivas ou negativas.
    - question: Quais produtos terão desconto?
      answer: Não é possível confirmar quais produtos específicos estarão em promoção, isso porque também depende exclusivamente das lojas participantes. A lista de itens com desconto estará disponível no dia do evento, tanto no nosso site quanto no site dos lojistas.
    - question: Quais são as formas de pagamento?
      answer: Isso depende única e exclusivamente da loja que você comprar seu produto. Teremos várias lojas participantes e cada uma tem suas próprias formas de pagamento.
    - question: É possível receber ofertas com antecedência?
      answer: Sim! Para receber as melhores ofertas de nossos parceiros com antecedência basta cadastrar seu email agora mesmo na nossa home www.blackfriday.com.br.

---

{% for section in page.sections %}
  {% include {{ section }}.html %}
{% endfor %}