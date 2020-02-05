<template>
  <div class="main">
    <div class="museum-list">
      <Header ref="header" type="static" :has-logo="false" />
      <div class="container museum-list__container museum-list__head">
        <div class="museum-list__intro">
          <div class="museum-list__head-text">
            Reykjavíkurborg á og rekur Listasafn Reykjavíkur, Borgarsögusafn
            Reykjavíkur og Borgarbókasafnið og eru þau með starfsemi á 14 stöðum
            víðsvegar um borgina. Á söfnunum er allt kapp lagt á að miðla sögu,
            bókakosti, myndlist og því sem hæst ber í listum og menningu hverju
            sinni. Tugir sýninga eru opnaðar á ári hverju og haldnir eru mörg
            hundruð viðburðir sem ætlað er að höfða til ólíkra hópa. Því ættu
            allir að finna eitthvað við sitt hæfi á söfnum Reykjavíkurborgar.
          </div>
        </div>
      </div>
      <div class="museum-list__footer">
        <ul class="museum-list__footer-list">
          <li class="museum-list__footer-item">
            <a
              href="https://menningarkort.is"
              target="_blank"
              rel="noopener noreferrer"
              class="museum-list__footer-link"
            >
              <LogoMenningarkort
                class="museum-list__footer-icon museum-list__footer-icon_menningarkort"
              />
            </a>
          </li>
          <li
            v-for="item in logos"
            :key="item.id"
            class="museum-list__footer-item"
          >
            <a
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="museum-list__footer-link"
            >
              <Icon
                :name="item.icon"
                class="museum-list__footer-icon"
                :class="`museum-list__footer-icon_${item.modifier}`"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        v-for="museum in museums"
        :key="museum.id"
        class="container museum-list__container"
      >
        <div class="museum-list__intro">
          <div class="museum-list__title">
            {{ museum.title }}
          </div>
          <div class="museum-list__text">
            {{ museum.text }}
          </div>
          <ul class="museum-list__links">
            <li
              v-for="item in museum.links"
              :key="item.id"
              class="museum-list__links-item"
            >
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="museum-list__link link-inner"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="museum-list__items">
          <div
            v-for="item in museum.items"
            :key="item.id"
            class="museum-list__item"
          >
            <MuseumCard
              :img="item.img"
              :title="item.title"
              :text="item.address"
              :links="item.links"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import MuseumCard from '~/components/MuseumCard'
import Icon from '~/components/Icon'
import LogoMenningarkort from '~/components/LogoMenningarkort'

export default {
  name: 'Sofnin',
  components: {
    Header,
    MuseumCard,
    Icon,
    LogoMenningarkort
  },
  computed: {
    logos() {
      return [
        {
          id: 'borgarsogusafn',
          href: 'http://www.borgarbokasafn.is',
          icon: 'borgarbokasafnid-v3',
          modifier: 'borgarbokasafnid'
        },
        {
          id: 'borgarbokasafn',
          href: 'http://borgarsogusafn.is/is',
          icon: 'borgarsogusafn',
          modifier: 'borgarsogusafn'
        },
        {
          id: 'listasafn',
          href: 'http://listasafnreykjavikur.is/',
          icon: 'listasafn',
          modifier: 'listasafn'
        }
      ]
    },
    museums() {
      return [
        {
          id: 1,
          title: 'Borgarbókasafn Reykjavíkur',
          text:
            'Borgarbókasafnið er almenningsbókasafn Reykvíkinga og er öllum opið. Safnið er kraumandi menningarmiðja í þínu hverfi. Þar ﬁnnur þú allt í senn, bækur, viðburði, þekkingu, tónlist, fróðleik og fyndni, kvikmyndir og myndlist. Á safninu getur þú upplifað eitthvað nýtt, mælt þér mót við vini, gluggað í blöð og tímarit eða slappað af í rólegu horni. Þar er einnig auðvelt að ﬁnna pláss til að læra, halda fundi eða taka þátt í klúbbum. Borgarbókasafnið rekur sex starfsstaði ásamt bókabílnum Höfðingja og sögubílnum:',
          links: this.convertLinks({
            website: '//www.borgarbokasafn.is',
            facebook: 'https://www.facebook.com/Borgarbokasafnid/'
          }),
          items: this.convertItems([
            {
              id: 0,
              img: '/img/BorgarBokasafn/arbae.jpg',
              title: 'Borgarbókasafnið Árbæ',
              address: 'Hraunbæ 119, 110 Reykjavík',
              email: 'arbaer@borgarbokasafn.is',
              link: 'https://borgarbokasafn.is/bokasofn/arbaer'
              // facebook: 'https://www.facebook.com/Borgarbokasafnid/'
            },
            {
              id: 1,
              img: '/img/BorgarBokasafn/gerdubergi.jpg',
              title: 'Borgarbókasafnið Gerðubergi',
              address: 'Gerðuberg 3-5, 111 Reykjavík',
              email: 'gerduberg@borgarbokasafn.is',
              link: 'https://borgarbokasafn.is/bokasofn/gerduberg'
              // facebook: 'https://www.facebook.com/Borgarbokasafnid/'
            },
            {
              id: 2,
              img: '/img/BorgarBokasafn/grofinni.jpg',
              title: 'Borgarbókasafnið Grófinni',
              address: 'Tryggagata 15, 101 Reykjavík',
              email: 'grofin@borgarbokasafn.is',
              link: 'https://borgarbokasafn.is/bokasofn/grofin'
              // facebook: 'https://www.facebook.com/Borgarbokasafnid/'
            },
            {
              id: 3,
              img: '/img/BorgarBokasafn/kringlunni.jpg',
              title: 'Borgarbókasafnið Kringlunni',
              address: 'Listabraut 3, 103 Reykjavík',
              email: 'kringlan@borgarbokasafn.is',
              link: 'https://borgarbokasafn.is/bokasofn/kringlan'
              // facebook: 'https://www.facebook.com/Borgarbokasafnid/'
            },
            {
              id: 4,
              img: '/img/BorgarBokasafn/solheimum.jpg',
              title: 'Borgarbókasafnið Sólheimum',
              address: 'Sólheimar 27, 104 Reykjavík',
              email: 'solheimasafn@borgarbokasafn.is',
              link: 'https://borgarbokasafn.is/bokasofn/solheimar'
              // facebook: 'https://www.facebook.com/Borgarbokasafnid/'
            },
            {
              id: 5,
              img: '/img/BorgarBokasafn/sponginni.jpg',
              title: 'Borgarbókasafnið Spönginni',
              address: 'Spöngin 41, 112 Reykjavík.',
              email: 'spongin@borgarbokasafn.is',
              link: 'https://borgarbokasafn.is/bokasofn/spongin'
              // facebook: 'https://www.facebook.com/Borgarbokasafnid/'
            },
            {
              id: 6,
              img: '/img/BorgarBokasafn/hofdingi.jpg',
              title: 'Bókabíllinn Höfðingi',
              address: 'Listabraut 3, 103 Reykjavík',
              email: 'borgarbokasafn@borgarbokasafn.is',
              link: 'https://borgarbokasafn.is/bokasofn/bokabillinn'
              // facebook: 'https://www.facebook.com/Borgarbokasafnid/'
            }
          ])
        },
        {
          id: 2,
          title:
            'Borgarsögusafn Reykjavíkur – eitt safn á fimm einstökum stöðum',
          text:
            'Borgarsögusafn Reykjavíkur er næststærsta safn landsins á eftir Þjóðminjasafninu. Hlutverk þess er að safna, skrásetja, varðveita og rannsaka menningarminjar sem eru einkennandi fyrir menningararf borgarinnar, og miðla sögu hennar og menningu frá landnámi til samtímans.',
          links: this.convertLinks({
            website: 'http://borgarsogusafn.is/is',
            facebook: 'https://www.facebook.com/reykjavikcitymuseum/'
          }),
          items: this.convertItems([
            {
              id: 1,
              img: '/img/BorgarSogusafn/arbaejarsafn.jpg',
              title: 'Árbæjarsafn',
              address: 'Kistuhyl 4, 110 Reykjavík. Sími 411 6304',
              link: 'http://borgarsogusafn.is/is/arbaejarsafn',
              facebook: 'https://www.facebook.com/arbaejarsafn/'
            },
            {
              id: 2,
              img: '/img/BorgarSogusafn/landnamssyningin.jpg',
              title: 'Landnámssýningin',
              address: 'Aðalstræti 16, 101 Reykjavík',
              link: 'http://borgarsogusafn.is/is/landnamssyningin ',
              facebook: 'https://www.facebook.com/TheSettlementExhibition/'
            },
            {
              id: 3,
              img: '/img/BorgarSogusafn/ljsmyndasafn-reykjavik.jpg',
              title: 'Ljósmyndasafn Reykjavíkur',
              address: 'Tryggvagötu 15, 6. hæð',
              link: 'http://borgarsogusafn.is/is/ljosmyndasafn-reykjavikur',
              facebook: 'https://www.facebook.com/ljosmyndasafnreykjavikur/'
            },
            {
              id: 4,
              img: '/img/BorgarSogusafn/sjominjasafnid-reykjavik.jpg',
              title: 'Sjóminjasafnið í Reykjavík',
              address: 'Grandagarði 8, 101 Reykjavík',
              link: 'http://borgarsogusafn.is/is/sjominjasafnid-i-reykjavik',
              facebook: 'https://www.facebook.com/sjominjasafnid/'
            },
            {
              id: 5,
              img: '/img/BorgarSogusafn/videy.jpg',
              title: 'Viðey',
              address: '104 Reykjavík. Sími 411 6360',
              link: 'http://borgarsogusafn.is/is/videy',
              facebook: 'https://www.facebook.com/videyreykjavik/'
            }
          ])
        },
        {
          id: 3,
          title: 'Listasafn Reykjavíkur – Eitt safn á þremur stöðum',
          text:
            'Listasafn Reykjavíkur er lifandi og framsækinn vettvangur sem býður upp á fjölbreyttar sýningar á nútíma- og samtímalist, málverkum og skúlptúrum eftir virta íslenska og erlenda listamenn. Safnið er jafnframt vettvangur fyrir ungt og upprennandi hæfileikafólk',
          links: this.convertLinks({
            website: 'http://listasafnreykjavikur.is/',
            facebook: 'https://www.facebook.com/listasafnreykjavikur/'
          }),
          items: this.convertItems([
            {
              id: 1,
              img: '/img/listasafn-reykjavik/asmundarsafn.jpg',
              title: 'Ásmundarsafn',
              address: 'Sigtún, 105 Reykjavík. Sími 411 6430',
              // facebook: 'https://www.facebook.com/listasafnreykjavikur/',
              email: 'listasafn@reykjavik.is',
              link: 'http://listasafnreykjavikur.is/asmundarsafn'
            },
            {
              id: 2,
              img: '/img/listasafn-reykjavik/hafnarhus.jpg',
              title: 'Hafnarhús',
              address: 'Tryggvagata 17, 101 Reykjavík. Sími 411 6410',
              // facebook: 'https://www.facebook.com/listasafnreykjavikur/',
              email: 'listasafn@reykjavik.is',
              link: 'http://listasafnreykjavikur.is/hafnarhus'
            },
            {
              id: 3,
              img: '/img/listasafn-reykjavik/kjarvalasstadir.jpg',
              title: 'Kjarvalsstaðir',
              address: 'Flókagata 24, 105 Reykjavík. Sími 411 6420.',
              // facebook: 'https://www.facebook.com/listasafnreykjavikur/',
              email: 'listasafn@reykjavík.is',
              link: 'http://listasafnreykjavikur.is/kjarvalsstadir'
            }
          ])
        }
      ]
    }
  },
  methods: {
    convertLinks(links) {
      return Object.keys(links).map(key => ({
        id: key,
        href: links[key],
        text:
          key === 'website'
            ? 'Vefsíða'
            : key === 'facebook'
            ? 'Facebook'
            : links[key]
      }))
    },
    convertItems(items) {
      return items.map(item => {
        const links = []
        item.email &&
          links.push({
            id: 'email',
            href: `mailto:${item.email}`,
            text: 'Netfang'
          })
        item.link &&
          links.push({
            id: 'link',
            href: item.link,
            text: 'Vefsíða'
          })
        item.facebook &&
          links.push({
            id: 'facebook',
            href: item.facebook,
            text: 'Facebook'
          })
        return {
          id: item.id,
          img: item.img,
          title: item.title,
          text: item.address,
          links
        }
      })
    }
  }
}
</script>
