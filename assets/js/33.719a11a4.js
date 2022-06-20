(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{479:function(t,_,a){"use strict";a.r(_);var v=a(65),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_29-распределенные-бд-определение-стратегии-размещения-данных-в-системе-их-достоинства-и-недостатки-понятие-прозрачности"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_29-распределенные-бд-определение-стратегии-размещения-данных-в-системе-их-достоинства-и-недостатки-понятие-прозрачности"}},[t._v("#")]),t._v(" 29. Распределенные БД. Определение. Стратегии размещения данных в системе, их достоинства и недостатки. Понятие прозрачности")]),t._v(" "),a("h2",{attrs:{id:"распределенные-дб"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#распределенные-дб"}},[t._v("#")]),t._v(" Распределённые ДБ")]),t._v(" "),a("p",[a("code",[t._v("def")]),t._v(" "),a("strong",[t._v("Распределённая БД")]),t._v(" - это набор логически связанных между собой разделяемых данных и их описаний, которые физически распределены по нескоьким вычислительным узлам.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Понятно, что нужно разделять таблицы")])]),t._v(" "),a("p",[a("code",[t._v("def")]),t._v(" "),a("strong",[t._v("Фрагментирование")]),t._v(" - это разделение отношения, а получившиеся компоненты называются фрагментами.")]),t._v(" "),a("h3",{attrs:{id:"типы-распределенных-бд"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#типы-распределенных-бд"}},[t._v("#")]),t._v(" Типы распределённых БД")]),t._v(" "),a("ol",[a("li",[t._v("Гомогенные - одинаковая СУБД на всех узлах")]),t._v(" "),a("li",[t._v("Гетерогенные - разные СУБД на узлах")])]),t._v(" "),a("h3",{attrs:{id:"преимущества-распределенных-бд"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#преимущества-распределенных-бд"}},[t._v("#")]),t._v(" Преимущества распределённых БД")]),t._v(" "),a("ol",[a("li",[t._v("Может нативно отображать структуру организации")]),t._v(" "),a("li",[t._v("Отказоустойчивость?")]),t._v(" "),a("li",[t._v("Повышение доступности и надёжности")]),t._v(" "),a("li",[t._v("Модульность системы")])]),t._v(" "),a("h3",{attrs:{id:"недостатки-распределенных-бд"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#недостатки-распределенных-бд"}},[t._v("#")]),t._v(" Недостатки распределённых БД")]),t._v(" "),a("ol",[a("li",[t._v("Повышение сложности")]),t._v(" "),a("li",[t._v("Увеличение стоимости владения")]),t._v(" "),a("li",[t._v("Проблема защиты")]),t._v(" "),a("li",[t._v("Усложнение контроля за целостностью данных")]),t._v(" "),a("li",[t._v("Отсутствие стандартов")])]),t._v(" "),a("h2",{attrs:{id:"фрагментироваие"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#фрагментироваие"}},[t._v("#")]),t._v(" Фрагментироваие")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Горизонтальное (шардирование) - выделение подмножеств строк")])]),t._v(" "),a("li",[a("p",[t._v("Вертикальное - пытаемся хранить таблицу не как кортежи со всеми атрибутаит, а отдельно столбцы (храним на разнызх узлах данные разной секретности)")])]),t._v(" "),a("li",[a("p",[t._v("Смешанное - очев (когда есть фрагмент таблицы, который часто используется)")])])]),t._v(" "),a("p",[a("code",[t._v("def")]),t._v(" "),a("strong",[t._v("Репликация")]),t._v(" - поддержка синхронизированных физических копий некоторго объекта БД")]),t._v(" "),a("h2",{attrs:{id:"стратегии-размещения-данных-в-распределеннои-системе"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#стратегии-размещения-данных-в-распределеннои-системе"}},[t._v("#")]),t._v(" Стратегии размещения данных в распределённой системе")]),t._v(" "),a("h3",{attrs:{id:"_1-фрагментированное-раздельное-размещение"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-фрагментированное-раздельное-размещение"}},[t._v("#")]),t._v(" 1. Фрагментированное (раздельное) размещение")]),t._v(" "),a("p",[t._v("БД разбиваетсяна непересекующиеся фрагменты, и каждый из фрагментов располагается строго на одном узле")]),t._v(" "),a("h3",{attrs:{id:"_2-размещение-с-полнои-репликациеи"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-размещение-с-полнои-репликациеи"}},[t._v("#")]),t._v(" 2. Размещение с полной репликацией")]),t._v(" "),a("p",[t._v("На каждом узле есть полная реплика всей БД (олимпа ИТМО по рпоге)")]),t._v(" "),a("h3",{attrs:{id:"_3-размещение-с-выборочнои-репликациеи"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-размещение-с-выборочнои-репликациеи"}},[t._v("#")]),t._v(" 3. Размещение с выборочной репликацией")]),t._v(" "),a("p",[t._v("Разделяем БД тем или иным способом, и для каждого фрагмента решаем 2 задачи:")]),t._v(" "),a("ol",[a("li",[t._v("Сколько копий фрагмента сделать")]),t._v(" "),a("li",[t._v("Где их прасположить")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("СУБД должна принимать данные решения")])]),t._v(" "),a("h2",{attrs:{id:"принципы-прозрачности-субд"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#принципы-прозрачности-субд"}},[t._v("#")]),t._v(" Принципы прозрачности СУБД")]),t._v(" "),a("h3",{attrs:{id:"_1-прозрачность-фрагментации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-прозрачность-фрагментации"}},[t._v("#")]),t._v(" 1. Прозрачность фрагментации")]),t._v(" "),a("p",[t._v("Пользователь не знает ,как фрагментирован тот или иной объект")]),t._v(" "),a("h3",{attrs:{id:"_2-прозрачность-расположения-фрагмента"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-прозрачность-расположения-фрагмента"}},[t._v("#")]),t._v(" 2. Прозрачность расположения фрагмента")]),t._v(" "),a("p",[t._v("Пользователь не знает ,на каком конкретном узле расположен тот фрагмент, к которому он обращается")]),t._v(" "),a("h3",{attrs:{id:"_3-прозрачность-количества-реплик"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-прозрачность-количества-реплик"}},[t._v("#")]),t._v(" 3. Прозрачность количества реплик")]),t._v(" "),a("p",[t._v("Пользователь не может обратиться к конкретнной реплике")]),t._v(" "),a("h3",{attrs:{id:"_4-прозрачность-контроля-доступа"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-прозрачность-контроля-доступа"}},[t._v("#")]),t._v(" 4. Прозрачность контроля доступа")]),t._v(" "),a("p",[t._v("Пользователь не знает, данных действительно нет или у него нет на них доступа")])])}),[],!1,null,null,null);_.default=s.exports}}]);