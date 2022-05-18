# Questions

1. **¿Qué es un Coding Dojo?** [Reference][1]

   A Coding Dojo is a programming session based around a simple coding challenge. Programmers of different skill levels are invited to engage in deliberate practice as equals. The goal is to learn, teach and improve with fellow software developers in a non-competitive setting.

1. **Diferencia entre Requerimientos, Criterios de Aceptación y Escenarios de Prueba. Dar ejemplos a partir de un problema distinto a la Referencia.** [Reference][2]

   Un requisito de software es una propiedad que debe ser mostrada por algo para solucionar algún problema en el mundo real, expresando las necesidades y restricciones relacionadas a un producto de software que contribuyen a la solución.

   - Ejemplo

      - Requerimiento: La aplicación de reportes REPOR debe tener un reporte diario para los consumos de los clientes VIP.
      - Criterio de aceptación: Si no existen datos para generar el reporte, la aplicación debe advertir al usuario.
      - Escenario de Prueba: Ejecutar la aplicación un día en el que no hayan consumos de cliente VIP debe generar una advertencia de "No existen datos suficientes para generar el reporte diario para los consumos de los clientes VIP"

1. **De dos ejemplos de requerimientos no-funcionales, y especifique cual es su categoría (seguridad, performance, portabilidad, etc.)**

    1. Seguridad: El usuario no debe ser capaz de interactuar directamente con la base de datos.

    1. Eficiencia: La aplicación debe tener un tiempo de respuesta de menos de 1 segundo para cualquier operación.

1. **¿Qué es TDD?** [Reference][3]

    Es una práctica de programación que consiste en escribir primero las pruebas (generalmente unitarias), después escribir el código fuente que pase la prueba satisfactoriamente y, por último, refactorizar el código escrito. Con esta práctica se consigue entre otras cosas: un código más robusto, más seguro, más mantenible y una mayor rapidez en el desarrollo.

1. **¿Que son pruebas unitarias automatizadas?** [Reference][4]

    Las pruebas automatizadas consisten en la aplicación de herramientas de software para automatizar el proceso manual de revisión y validación de un producto de software que lleva a cabo una persona. Ahora, la mayoría de los proyectos de software ágiles y de DevOps modernos incluyen pruebas automatizadas desde el principio.

1. **¿Cual fue el 1er framework de pruebas unitarias y para cual lenguaje fue creado?** [Reference][5]

    JUnit(1997) para el lenguaje de programación Java

1. **¿Describa los componentes de la arquitectura xUnit?** [Reference][6]

    Test Runner: es un programa ejecutable que realiza las pruebas implementadas utilizando un framework xUnit e informa los resultados de la prueba.

    Test Case: es la clase más elemental. Todas las pruebas unitarias se heredan de aquí.

    Test fixtures: es el conjunto de condiciones previas o estado necesario para ejecutar una prueba. El desarrollador debe establecer un buen estado conocido antes de las pruebas y volver al estado original después de las pruebas.

    Test suites: es un conjunto de pruebas que comparten el mismo fixture.

    Test execution: la ejecución de una prueba unitaria individual contiene un método setup para preparar el ambiente, despues el cuerpo de la prueba y por último un método teardown para limpiar el ambiente creado para las pruebas.

    Test result formatter: Un Test Runner produce resultados en uno o más formatos de salida. Además de un formato simple y legible por humanos, a menudo hay un Test result formatter que produce una salida XML.

    Assertions: es una función o macro que verifica el comportamiento (o el estado) de la unidad bajo prueba.

1. **Indique al menos tres desventajas de las pruebas unitarias automatizadas** [Reference][7]

   - No puede capturar todos los errores
   - Consume mucho tiempo escribir las pruebas
   - Requiere mucho tiempo mantener las pruebas

1. **Indique al menos tres ventajas de las pruebas unitarias automatizadas** [Reference][7]

    - Menor tiempo de ejecución al ejecutar múltiples pruebas
    - Te ayuda a escribir un mejor código
    - Te ayuda a ser más eficiente al escribir código

[1]: https://code.joejag.com/2009/the-coding-dojo.html
[2]: https://lorenzosolano.com/requirements-acceptance-criteria-and/
[3]: https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/
[4]: https://www.atlassian.com/es/continuous-delivery/software-testing/automated-testing
[5]: https://en.wikipedia.org/wiki/JUnit
[6]: https://en.wikipedia.org/wiki/XUnit#xUnit_architecture
[7]: https://methodpoet.com/unit-testing-advantages-and-disadvantages/

## References

- [Work Item](Work-Item.md)

- [Readme](../Readme.md)
