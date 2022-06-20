(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{483:function(t,s,v){"use strict";v.r(s);var _=v(65),l=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_32-общие-характеристики-nosql-баз-данных"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_32-общие-характеристики-nosql-баз-данных"}},[t._v("#")]),t._v(" 32. Общие характеристики NoSQL баз данных")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("Отказ от стандарта SQL (он есть, но со множеством отхождений)")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Schemaless")]),t._v(" (неструктурированность)")]),t._v(" "),v("p",[t._v("Мы можем менять что-то в структуре данных уже по дороге")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Aggregates")])]),t._v(" "),v("p",[t._v("Впротивовес нормализованным SQL решениям мы пытаемся хранить данные как можно более сгруппированными "),v("em",[t._v("(отмена декомпозиции)")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Это связано с тем, что зачастую из миллиардов возможных комбинаций SQL запросов (аггрегатов таблиц), зачастую используется 30-50, отсюда и идея о том, чтобы сразу хранить данные в таком виде, в котором их было бы удобно запрашивать")])]),t._v(" "),v("li",[v("p",[t._v("Минус заключается в том, что при NoSQL, когда, всё-таки, приходится делать аггрегат данных, приходится фактически просматривать полностью всю базу данных для построения результата запроса")])])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Weak ACID")]),t._v(" (Atomicity, Consistenss, Isolation, Durability)")]),t._v(" "),v("p",[t._v("Транзакция в базе перестаёт сохранять указанные для неё в SQL свойства.")]),t._v(" "),v("ul",[v("li",[t._v("На смену ACID пришла другая модель BASE (Basic Avialability, Sost State, Eventual Consistens)")])])])]),t._v(" "),v("h2",{attrs:{id:"base-модель"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#base-модель"}},[t._v("#")]),t._v(" BASE модель")]),t._v(" "),v("ol",[v("li",[t._v("Каждый запрос гарантированно завершается")]),t._v(" "),v("li",[t._v("Система может изменять данные даже без ввода или изменения данных извне")]),t._v(" "),v("li",[t._v("Конечная непротиворечимость")])])])}),[],!1,null,null,null);s.default=l.exports}}]);