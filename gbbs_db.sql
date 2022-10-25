-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2022 a las 18:15:50
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gbbs_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `email`
--

CREATE TABLE `email` (
  `id` int(11) NOT NULL,
  `email_emisor` varchar(100) NOT NULL,
  `email_receptor` varchar(100) NOT NULL,
  `contenido` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `id` int(11) NOT NULL,
  `autor` varchar(150) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `fecha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `foro`
--

INSERT INTO `foro` (`id`, `autor`, `titulo`, `subtitulo`, `cuerpo`, `categoria`, `fecha`) VALUES
(2, '123123', 'Muere la Reina Isabel II ', 'La reina Isabel II murió el jueves en su residencia de Balmoral a los 96 años, después de un reinado', 'La reina Isabel II murió el jueves en su residencia de Balmoral a los 96 años, después de un reinado de 70 años.\n\"La reina murió en paz en Balmoral esta tarde\", anunció el Palacio de Buckingham este jueves.\n\"El rey (Carlos) y la reina consorte (Camila) permanecerán en Balmoral esta noche y volverán a Londres mañana (viernes)\".\nTras llegar al trono en 1952, la reina Isabel protagonizó el reinado más extenso de la historia británica, marcado por su fuerte sentido del deber y su determinación por dedicar su vida al trono y a su pueblo.\nLa familia real emitió un comunicado en nombre del nuevo rey, que será llamado oficialmente Carlos III:\n\"El fallecimiento de mi querida madre, Su Majestad la Reina, es un momento de máxima tristeza para mí y para todos los miembros de mi familia\".\n\"Lloramos profundamente el fallecimiento de una soberana y una madre muy querida\".\n\"Sé que su pérdida se sentirá profundamente en todo el país, los reinos y la Commonwealth y por innumerables personas de todo el mundo\".\n\"Durante este período de luto y cambio, mi familia y yo nos sentiremos reconfortados y sostenidos por el respeto y el profundo afecto que se le profesaba a la Reina\".\n', 'noticias', '17/09/2022'),
(3, '123123', ' Elemento Driven con Ganma-Matching para construir', 'Saludos estimados Colegas, en esta oportunidad les presento ideas para construir la antena más popul', 'Saludos estimados Colegas, en esta oportunidad les presento ideas para construir la antena más popular y usada como elemento irradiante en la mayoría de diseños de antenas para UHF, VHF y HF de corta λ, lleva por nombre “ Driven Element “, básicamente consiste en un tubo conductor de 1/2λ firmemente soportado desde el centro del mismo y acoplado a la línea coaxial mediante de un dispositivo capacitivo denominado “ Adaptador Ganma-matching “.\n', 'antenas', '17/09/2022'),
(4, 'manudiiez', 'La historia de los BBS', 'Durante los años 80 y 90 del siglo pasado, los BBS (Bulletin Board System) fueron muy populares', 'Durante los años 80 y 90 del siglo pasado, los BBS (Bulletin Board System) fueron muy populares. No eran otra cosa que un software que permitía a un grupo de usuarios conectarse entre sí, mediante un programa emulador de terminal, para intercambiar mensajes, ficheros o jugar en línea. Los BBS rápidamente se convirtieron en el punto de encuentro de aficionados a las comunicaciones y desarrolladores de software. Se trata de los primeros sistemas públicos de intercambio de ficheros, y son en cierta forma los precursores de los foros del Web y de las redes sociales. ¿Conoces la historia de los BBS?\nHace mucho tiempo atrás, unos cinco años después de la aparición del IBM PC, comenzaron a popularizarse los Bulletin Board System (BBS, o Sistema de Tablón de Anuncios). A mediados de la década de 1980, lo que hoy conocemos como “internet” recién comenzaba a hacerse conocida, aunque funcionaba básicamente como una red de investigación y para usos militares bajo en nombre de ARPANET. El público en general no tenia acceso a ella y la “web” tal como la conocemos, nació recién en 1989 y demoró cerca de 10 años en convertirse en un servicio popular. Pero antes de que eso ocurriese, muchos usuarios igualmente se conectaban entre sí -compartiendo ficheros, imágenes o mensajes- gracias a los BBS.\nUn BBS no era otra cosa que un programa de ordenador. Su función básica era la de permitirle recibir mensajes de otros ordenadores a través de una linea telefónica. Para conectarse a un BBS, los usuarios necesitaban solamente un ordenador, que no necesariamente debía ser un “PC compatible” (podías usar un Spectrum, Commodore o casi cualquier ordenador que tuvieses), un softwa re emulador de terminal, un modem y -obviamente- una línea telefónica. No hacia falta un servicio de ISP (Internet Service Provider) ni nada de eso, simplemente configurabas tu ordenador para que llamase al número de teléfono del BBS.\nEl primer BBS fue Computerized Bulletin Board System, o CBBS, creado por Ward Christensen el 16 de febrero de 1979 en Chicago (EE. UU.). Aunque algunos disponían de muchas lineas, lo normal era solo dispusiese de una -la mayoría de ellos eran mantenidos por un aficionado que no obtenía ningún beneficio económico de esa actividad- y que los usuarios tuviesen que “hacer cola” esperando que el usuario anterior se desconectase para poder acceder. Esta situación hacía que la mayoría de los BBS implementase un sistema de créditos para limitar el tiempo disponible para cada abonado. Cada día se le entregaba a cada usuario automáticamente un numero de créditos que le permitía conectarse -por ejemplo- diez minutos. Se podían obtener créditos extra subiendo archivos o imágenes, presentando nuevos usuarios, etc.\nLas llamadas, a pesar de ser emitidas y recibidas por un ordenador, eran cobradas por las empresas telefónicas aplicando el mismo cuadro tarifarlo que existía para las llamadas normales. Esto tenía mucho sentido, ya que el modem justamente lo que hace es convertir los ceros y unos que “entiende” el ordenador en tonos que se transmiten por la linea telefónica (y en el otro extremo hace el trabajo contrario), por lo que a las empresas prestadoras del servicio no les suponía ninguna diferencia con las llamadas de voz “normales”.\nEsto significaba que si el BBS al que te ibas a conectar estaba en otro país, la factura del teléfono seguramente sería astronómica, por lo que era conveniente buscar uno que estuviese físicamente cerca de tu casa. Para que te des una idea, los modems disponibles en esa época funcionaban a 300, 1200, 9600 o -casi al final de la era dorada delos BBS- a 19200 baudios. A esas “velocidades” se podían enviar o recibir entre unos 30 y 1900 caracteres por segundo. El tiempo de conexión necesario para bajar un fichero -a pesar de que en esos años todo se media en “kilobytes”- podía ser enorme.\nAfortunadamente, allá por 1984 apareció “Fido” un programa para intercambio de información y ficheros que permitía automatizar esta tarea. Al no requerir que el usuario estuviese frente al ordenador para “navegar” por las opciones del BBS, se podía programar la conexión para que se efectuase en el horario de tarifa nocturna telefónica, ahorrando bastante dinero. Pronto, gracias al interés de los dueños de los BBS por este sistema, nació Fidonet, que en poco tiempo se convertiría en la red más grande de intercambio de información y ficheros entre BBS. El descenso del costo del hardware también ayudó a que muchos usuarios instalasen sus propios BBS.\nNo hay que olvidar que en aquellos años el almacenamiento de datos era bastante problemático, porque casi todos los equipos utilizaban disqueteras con de 180 KB de capacidad (o poco más), lo que obligaba al operador del sistema a realizar cambios manuales de discos todo el tiempo. La aparición de discos duros a precios razonables hizo todo mucho más fácil. Años más tarde, la aparición de los sistemas operativos multitarea como Amiga OS, OS/2, Unix o Windows proporcionó un nuevo empuje, al no necesitar de un ordenador dedicado para montar un BBS. El incremento en la velocidad de los modems también ayudo a este fenómeno, que tuvo su punto más alto entre 1992 y 1995.\nDe alguna manera, los BBS fueron los precursores de los foros web y las redes sociales, así como de servicios como el correo electrónico, servidores FTP, etc. Si bien muchos particulares mantenían sus propios BBS como un hobby, rápidamente las empresas comenzaron a ver el potencial del sistema. Algunas ofrecían soporte a sus clientes y trabajadores, y otras mostraban sus catálogos y permitían hacer pedidos a distancia. También aparecieron los BBS comerciales.\nAOL, por ejemplo, comenzó con un único producto: un servicio en línea llamado Gameline para la consola videojuegos de Atari 2600. Pero en 1985 lanzó un BBS de pago para los ordenadores Commodore 64 y 128, originalmente llamado Quantum Link. Tuvo un enorme éxito, y en mayo de 1988 amplió sus servicios a los ordenadores Apple II y Macintosh. Después de cambiar el nombre a America Online, en agosto de 1988, puso en marcha un servicio para los “PC compatibles”. En AOL los usuarios podían encontrar juegos en línea, ficheros, correo, noticias, etc. En 1992 AOL lanzó la interfaz para Windows, a la vez que el mercado comenzaba a poblarse de competidores. En efecto, la popularización de los ordenadores hacía que los BBS “fuesen un buen negocio”, por lo que aparecieron otros BBS, como Prodigy, CompuServe y GEnie que comenzaron a “robarle” usuarios a AOL.\nDurante los años 80 y 90 los BBS fueron muy populares. Se convirtieron en el punto de encuentro de aficionados a las comunicaciones y desarrolladores de software. Constituyeron los primeros sistemas públicos de intercambio de ficheros, incluyendo los primeros programas shareware o los primeros virus informáticos. Muchos curiosos, que hoy son llamados -en el correcto sentido del término- “hackers”, comenzaron sus andanzas en esa época y se comunicaban entre sí a través de los BBS. La decadencia de estos sitios comenzó con el auge de Internet. La posibilidad de acceder a ordenadores de todo el mundo al mismo costo que una llamada local hizo que muchos abandonasen los BBS y se subieran a la web.\nEn pocos años, los Bulletin Board System prácticamente desaparecieron, y para el 2000 había más o menos la misma cantidad de usuarios que en 1985. En la actualidad sobreviven algunos, como el español  Eye Of The Beholder BBS, pero más que nada como una curiosidad o punto de encuentro para amigos que llevan décadas reuniéndose en ellos.', 'noticias', '17/09/2022'),
(5, 'manudiiez', 'La guía para rastrear y bloquear la portátil Windows que te robaron', 'las portátiles también pueden ser rastreadas y bloqueadas de forma remota como los celulares inteligentes,', 'las portátiles también pueden ser rastreadas y bloqueadas de forma remota como los celulares inteligentes, pero, muchos usuarios no conocen esta importante herramienta que los ayudaría a reforzar la seguridad y privacidad de la información que tienen almacenada en su computadora robada o extraviada. En esta oportunidad, desde Depor te enseñaremos el proceso para ubicar y bloquear tu laptop con sistema operativo Windows 10 o versiones superiores.\nGracias a la función denominada “Buscar mi dispositivo”, es posible rastrear tu laptop robada o perdida a través de Google Maps, asimismo, puedes bloquear el equipo y hasta emitir una alerta que dejará de sonar después de cinco minutos, todo lo vas a realizar desde otra computadora Windows. Es importante aclarar que en la portátil robada habrás tenido que registrar tu cuenta de Microsoft, de lo contario no podrás localizarla o bloquearla.\n', 'tutoriales', '17/09/2022'),
(6, 'manudiiez', 'Robo de cables: secuestraron más de 4.000 kilos de cobre en distintas chacaritas de San Rafael', 'Mendoza continúa la batalla contra el robo de cables.', 'Mendoza continúa la batalla contra el robo de cables. En esta oportunidad, agentes de la Unidad Investigativa de San Rafael realizaron tres allanamientos en distintos talleres en búsqueda de cobre. A raíz de estos procedimientos, lograron incautar una cantidad superior a 4.000 kilos de este metal y el arresto de 12 personas.\nEl primero de estos procedimientos se llevó a cabo en una chacarita ubicada sobre calle Los Sauces al 1800. Efectivos policiales aprehendieron a un hombre mayor de edad porque tenía en su poder una caja de cartón que contenía varias bolsas con restos de cobre y un tramo de cable de aproximadamente 18 metros. El peso total de todos estos materiales secuestrados era de 460 kilogramos.\nAdemás, el sujeto tenía una escopeta doble caño sin numeración ni marca visible y una pistola calibre 22. Asimismo, la Policía detuvo en el taller a otras cinco personas, quienes fueron trasladadas a la sede judicial.\nEl segundo allanamiento tuvo lugar en calle Luis Daudet al 200. Allí un hombre de 56 años y tres empleados terminaron aprehendidos por tener en su poder un total de 3.765 kilos netos de cobre. El metal fue trasladado en el móvil grúa de Policía Vial a la sede de Unidad Investigativa para su resguardo, detalla el parte oficial.\n\nMendoza continúa la batalla contra el robo de cables. En esta oportunidad, agentes de la Unidad Investigativa de San Rafael realizaron tres allanamientos en distintos talleres en búsqueda de cobre. A raíz de estos procedimientos, lograron incautar una cantidad superior a 4.000 kilos de este metal y el arresto de 12 personas.\n\nEl primero de estos procedimientos se llevó a cabo en una chacarita ubicada sobre calle Los Sauces al 1800. Efectivos policiales aprehendieron a un hombre mayor de edad porque tenía en su poder una caja de cartón que contenía varias bolsas con restos de cobre y un tramo de cable de aproximadamente 18 metros. El peso total de todos estos materiales secuestrados era de 460 kilogramos.\nAdemás, el sujeto tenía una escopeta doble caño sin numeración ni marca visible y una pistola calibre 22. Asimismo, la Policía detuvo en el taller a otras cinco personas, quienes fueron trasladadas a la sede judicial.\n\nEl segundo allanamiento tuvo lugar en calle Luis Daudet al 200. Allí un hombre de 56 años y tres empleados terminaron aprehendidos por tener en su poder un total de 3.765 kilos netos de cobre. El metal fue trasladado en el móvil grúa de Policía Vial a la sede de Unidad Investigativa para su resguardo, detalla el parte oficial.\nPor último, sobre calle El Fortín, otro sujeto de 57 años quedó a disposición de la Justicia junto con sus tres hijos ya que en el predio los sabuesos hallaron cuatro bolsas de arpillera, las cuales contenían en su interior 124 kilogramos de cobre. Todos fueron trasladados a la comisaría 62.\n', 'noticias', '17/09/2022'),
(7, 'manudiiez', ' Elemento Driven con Ganma-Matching para construir antenas VHF o UHF', 'Saludos estimados Colegas, en esta oportunidad les presento ideas para construir la antena más popular ', 'Saludos estimados Colegas, en esta oportunidad les presento ideas para construir la antena más popular y usada como elemento irradiante en la mayoría de diseños de antenas para UHF, VHF y HF de corta λ, lleva por nombre “ Driven Element “, básicamente consiste en un tubo conductor de 1/2λ firmemente soportado desde el centro del mismo y acoplado a la línea coaxial mediante de un dispositivo capacitivo denominado “ Adaptador Ganma-matching “.\n', 'antenas', '17/09/2022'),
(8, 'manudiiez', ' Antena colineal para 2 Mts. (136-174)', 'Hola a todos los colegas esta antena la encontre buscando algo que me orientase en la construccion de una antela colineal ', 'Hola a todos los colegas esta antena la encontre buscando algo que me orientase en la construccion de una antela colineal y a decir verdad me parecio muy buena asi que aqui se las dejo y espero sea util.73-s, Dx´s\n', 'antenas', '17/09/2022');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajeria`
--

CREATE TABLE `mensajeria` (
  `id` int(11) NOT NULL,
  `emisor` varchar(100) NOT NULL,
  `receptor` varchar(100) NOT NULL,
  `contenido` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre_completo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `nombre_usuario` varchar(100) NOT NULL,
  `foto_perfil` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre_completo`, `email`, `contraseña`, `nombre_usuario`, `foto_perfil`) VALUES
(18, 'manu diez de oñate', 'manu@manu.com', 'sha256$s61fL949RBw6au2K$27a5d64760c526707b5960cff241d9a228bf77ec6ec49670f3acc72b256b9881', 'manudiiez', '/static/img/default-A.png'),
(19, '123123 123123', '123@123.com', 'sha256$SuogHUG6Rj6aa4qT$a4d34a8bde09c10d614dd8d64651e3fd0e889ea17613e5000aba71b7dedab499', '123123', '/static/img/default-A.png');



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id` int(11) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `foro`
--
ALTER TABLE `foro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;


ALTER TABLE `comentario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
