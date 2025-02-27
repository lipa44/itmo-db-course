# 12. Операции реляционной алгебры: проекция, выборка, объединение, разность, пересечение

## Унарные

### 1. Проекция - `П_{a_1, a_2, a_3, ..., a_n}(R)`

`def` **Проекция** (`SELECT`) - это операция, которая определяет новое отношение, содержащее вертикальном подмножество исходного отношения, создоваемое посредством извлечения значений указанных аттрибутов и исключения из резуьтата строк-дубликатов.

### 2. Выборка - `S_{предикат}(R)`

`def` **Выборка** (`WHERE`) - это операция, которая определяет результирующее отношение, которое содержит только те кортежи из исходного отношения, которые удовлетворяют заданному условию _(предикату)_.

## Бинарные

### 3. Объединение - `R u S`

`def` **Объединение** (`UNION`) - это операция над отношениями R и S, определяющая **новое** отношение, которое включает все кортежи, содержащиеся только в R, все кортежи, содержащиеся только в S и кортежи, содержащиеся одновременно в R и S с исключением дубликатов.

:::tip
Объединение возможно только, если отношения совместимы, и обычно объединение считается **опасной операцией**
:::

`def` **Совместимость по объединению** - два отошения R и S будут совместимы по объединению, когда они состоят из одинакового кол-ва аттрибутов, и каждая пара соответствующих аттрибутов будет иметь одинаковый домен.

### 4. Разность - `R - S`

`def` **Разность** - это отношение, состоящее из кортежей, которые есть в отношении R, но отсутствуют в отношении S

:::tip
Данная операция требует, чтобы отношения были совместимы по объекдинению
:::

### 5. Пересечение - `R ^ S`

`def` **Пересечение** - это отношение, которое определяет кортежи, присутствующие в обоих отношениях одновременно

