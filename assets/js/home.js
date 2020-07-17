//DECLARATIONS

/*Cursillo*/
const Cursilllo_de_Ingreso = document.getElementById("Cursilllo_de_Ingreso");

/*Primer semestre*/
const Matematica_discreta_I = document.getElementById("Matematica_discreta_I");
const Analisis_Matematico_I = document.getElementById("Analisis_Matematico_I");
const Introduccion_a_los_Algoritmos = document.getElementById("Introduccion_a_los_Algoritmos");

/*Segundo semestre*/
const Algoritmos_y_estructura_de_Datos_I = document.getElementById("Algoritmos_y_estructura_de_Datos_I");
const Algebra = document.getElementById("Algebra");
const Analisis_Matematico_II = document.getElementById("Analisis_Matematico_II");

/*Tercer semestre*/
const Algoritmos_y_estructura_de_Datos_II = document.getElementById("Algoritmos_y_estructura_de_Datos_II");
const Organizacion_del_Computador = document.getElementById("Organizacion_del_Computador");
const Analisis_Numerico = document.getElementById("Analisis_Numerico");

/*Cuarto semestre*/
const Intro_logica_y_computacion = document.getElementById("Intro_logica_y_computacion");
const Probabilidad_y_estadistica = document.getElementById("Probabilidad_y_estadistica");
const Sistemas_operativos = document.getElementById("Sistemas_operativos");

/*Quinto semestre*/
const Matematica_discreta_II = document.getElementById("Matematica_discreta_II");
const Paradigma_de_programacion = document.getElementById("Paradigma_de_programacion");
const Redes_y_sistemas_distribuidos = document.getElementById("Redes_y_sistemas_distribuidos");

/*Sexto semestre*/
const Bases_de_datos = document.getElementById("Bases_de_datos");
const Arquitectura_de_computadora = document.getElementById("Arquitectura_de_computadora");
const Ingenieria_de_software_I = document.getElementById("Ingenieria_de_software_I");

/*Séptimo semestre*/
const Lenguajes_formales_y_compatibilidad = document.getElementById("Lenguajes_formales_y_compatibilidad");
const Modelos_de_simulacion = document.getElementById("Modelos_de_simulacion");

/*Octavo semestre*/
const Fisica = document.getElementById("Fisica");
const Logica = document.getElementById("Logica");

/*Noveno semestre*/
const Ingenieria_de_software_II = document.getElementById("Ingenieria_de_software_II");
const Lenguajes_y_compiladores = document.getElementById("Lenguajes_y_compiladores");

/*Décimo semestre*/
const Optativas = document.getElementById("Optativas");
const Trabajo_especial = document.getElementById("Trabajo_especial");

/* FUNCTIONS */

function regular_subject(sub){
    sub.classList.replace("semestre-materia", "regular")
};

function regular_subject_out(sub){
    sub.classList.replace("regular", "semestre-materia")
};

function aprobada_subject(sub){
    sub.classList.replace("semestre-materia", "aprobado")
};

function aprobada_subject_out(sub){
    sub.classList.replace("aprobado", "semestre-materia")
};

/*Primer semestre*/
Matematica_discreta_I.addEventListener('mouseover', function(){
    regular_subject(Cursilllo_de_Ingreso)});
Matematica_discreta_I.addEventListener('mouseout',function(){
    regular_subject_out(Cursilllo_de_Ingreso)});

Analisis_Matematico_I.addEventListener('mouseover',function(){
    regular_subject(Cursilllo_de_Ingreso)});
Analisis_Matematico_I.addEventListener('mouseout',function(){
    regular_subject_out(Cursilllo_de_Ingreso)});

Introduccion_a_los_Algoritmos.addEventListener('mouseover',function(){
    regular_subject(Cursilllo_de_Ingreso)});
Introduccion_a_los_Algoritmos.addEventListener('mouseout',function(){
    regular_subject_out(Cursilllo_de_Ingreso)});

/*Segundo semestre*/

Algoritmos_y_estructura_de_Datos_I.addEventListener('mouseover',function(){
    regular_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso)});
Algoritmos_y_estructura_de_Datos_I.addEventListener('mouseout',function(){
    regular_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

Algebra.addEventListener('mouseover',function(){
    regular_subject(Matematica_discreta_I);
    aprobada_subject(Cursilllo_de_Ingreso)});
Algebra.addEventListener('mouseout',function(){
    regular_subject_out(Matematica_discreta_I);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

Analisis_Matematico_II.addEventListener('mouseover',function(){
    regular_subject(Analisis_Matematico_I);
    aprobada_subject(Cursilllo_de_Ingreso)});
Analisis_Matematico_II.addEventListener('mouseout',function(){
    regular_subject_out(Analisis_Matematico_I);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

/*Tercer Semestre*/

Algoritmos_y_estructura_de_Datos_II.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso)});
Algoritmos_y_estructura_de_Datos_II.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

Organizacion_del_Computador.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso)});
Organizacion_del_Computador.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

Analisis_Numerico.addEventListener('mouseover',function(){
    regular_subject(Algebra);
    regular_subject(Analisis_Matematico_II);
    aprobada_subject(Matematica_discreta_I);
    aprobada_subject(Analisis_Matematico_I);
    aprobada_subject(Cursilllo_de_Ingreso)});
Analisis_Numerico.addEventListener('mouseout',function(){
    regular_subject_out(Algebra);
    regular_subject_out(Analisis_Matematico_II);
    aprobada_subject_out(Matematica_discreta_I);
    aprobada_subject_out(Analisis_Matematico_I);
    aprobada_subject_out(Cursilllo_de_Ingreso)});      

/*Cuarto Semestre*/

Intro_logica_y_computacion.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_I);
    regular_subject(Matematica_discreta_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso)});
Intro_logica_y_computacion.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_I);
    regular_subject_out(Matematica_discreta_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

Probabilidad_y_estadistica.addEventListener('mouseover',function(){
    regular_subject(Analisis_Matematico_II);
    aprobada_subject(Analisis_Matematico_I);
    aprobada_subject(Cursilllo_de_Ingreso)});
Probabilidad_y_estadistica.addEventListener('mouseout',function(){
    regular_subject_out(Analisis_Matematico_II);
    aprobada_subject_out(Analisis_Matematico_I);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

Sistemas_operativos.addEventListener('mouseover',function(){
    regular_subject(Organizacion_del_Computador);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso)});
Sistemas_operativos.addEventListener('mouseout',function(){
    regular_subject_out(Organizacion_del_Computador);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Cursilllo_de_Ingreso)});

/*Quinto Semestre*/
Matematica_discreta_II.addEventListener('mouseover',function(){
    regular_subject(Matematica_discreta_I);
    regular_subject(Algoritmos_y_estructura_de_Datos_II);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I)});
Matematica_discreta_II.addEventListener('mouseout',function(){
    regular_subject_out(Matematica_discreta_I);
    regular_subject_out(Algoritmos_y_estructura_de_Datos_II);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I)});

Paradigma_de_programacion.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_II);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I)});
Paradigma_de_programacion.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_II);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I)});

Redes_y_sistemas_distribuidos.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_II);
    regular_subject(Sistemas_operativos);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Organizacion_del_Computador)});
Redes_y_sistemas_distribuidos.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_II);
    regular_subject_out(Sistemas_operativos);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Organizacion_del_Computador)});

/*Sexto semestre*/
Bases_de_datos.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_II);
    regular_subject(Sistemas_operativos);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Organizacion_del_Computador)});
Bases_de_datos.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_II);
    regular_subject_out(Sistemas_operativos);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Organizacion_del_Computador)});
    
Arquitectura_de_computadora.addEventListener('mouseover',function(){
    regular_subject(Sistemas_operativos);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Organizacion_del_Computador)});
Arquitectura_de_computadora.addEventListener('mouseout',function(){
    regular_subject_out(Sistemas_operativos);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Organizacion_del_Computador)});

Ingenieria_de_software_I.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_II);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I)});
Ingenieria_de_software_I.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_II);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I)});

/*Séptimo semestre*/
Lenguajes_formales_y_compatibilidad.addEventListener('mouseover',function(){
    regular_subject(Intro_logica_y_computacion);
    aprobada_subject(Matematica_discreta_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I)});
Lenguajes_formales_y_compatibilidad.addEventListener('mouseout',function(){
    regular_subject_out(Intro_logica_y_computacion);
    aprobada_subject_out(Matematica_discreta_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I)});

Modelos_de_simulacion.addEventListener('mouseover',function(){
    regular_subject(Algoritmos_y_estructura_de_Datos_I);
    regular_subject(Probabilidad_y_estadistica);
    aprobada_subject(Analisis_Matematico_I);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Analisis_Matematico_II)});
Modelos_de_simulacion.addEventListener('mouseout',function(){
    regular_subject_out(Algoritmos_y_estructura_de_Datos_I);
    regular_subject_out(Probabilidad_y_estadistica);
    aprobada_subject_out(Analisis_Matematico_I);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Analisis_Matematico_II)});

/*Octavo semestre */
Fisica.addEventListener('mouseover',function(){
    regular_subject(Analisis_Matematico_II);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Analisis_Matematico_I)});
Fisica.addEventListener('mouseout',function(){
    regular_subject_out(Analisis_Matematico_II);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Analisis_Matematico_I)});

Logica.addEventListener('mouseover',function(){
    regular_subject(Intro_logica_y_computacion);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Matematica_discreta_I);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_II);});
Logica.addEventListener('mouseout',function(){
    regular_subject_out(Intro_logica_y_computacion);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Matematica_discreta_I);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_II )});

/*Noveno semestre */
Ingenieria_de_software_II.addEventListener('mouseover',function(){
    regular_subject(Ingenieria_de_software_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_II)});
Ingenieria_de_software_II.addEventListener('mouseout',function(){
    regular_subject_out(Ingenieria_de_software_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_II)});

Lenguajes_y_compiladores.addEventListener('mouseover',function(){
    regular_subject(Lenguajes_formales_y_compatibilidad);
    regular_subject(Logica);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Matematica_discreta_I);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Intro_logica_y_computacion)});
Lenguajes_y_compiladores.addEventListener('mouseout',function(){
    regular_subject_out(Lenguajes_formales_y_compatibilidad);
    regular_subject_out(Logica);
    aprobada_subject_out(Cursilllo_de_Ingreso);
    aprobada_subject_out(Matematica_discreta_I);
    aprobada_subject_out(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject_out(Introduccion_a_los_Algoritmos);
    aprobada_subject_out(Intro_logica_y_computacion)});

/*Décimo semestre */
Optativas.addEventListener('mouseover',function(){
    swal
    (`OPTATIVAS:
    Consultar la grilla todo depende de la optativa que se eliga`)});

Trabajo_especial.addEventListener('mouseover',function(){
    aprobada_subject(Intro_logica_y_computacion);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Matematica_discreta_I);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_II);
    aprobada_subject(Analisis_Numerico);
    aprobada_subject(Matematica_discreta_II);
    aprobada_subject(Paradigma_de_programacion);
    aprobada_subject(Redes_y_sistemas_distribuidos);
    aprobada_subject(Bases_de_datos);
    aprobada_subject(Arquitectura_de_computadora);
    aprobada_subject(Ingenieria_de_software_I);
    aprobada_subject(Lenguajes_formales_y_compatibilidad);
    aprobada_subject(Modelos_de_simulacion);
    aprobada_subject(Analisis_Matematico_II);
    aprobada_subject(Probabilidad_y_estadistica);
    aprobada_subject(Logica);
    aprobada_subject(Sistemas_operativos);
    aprobada_subject(Organizacion_del_Computador);
    aprobada_subject(Analisis_Matematico_I);
    aprobada_subject(Algebra);
    aprobada_subject(Fisica)});
Trabajo_especial.addEventListener('mouseout',function(){
    aprobada_subject(Intro_logica_y_computacion);
    aprobada_subject(Introduccion_a_los_Algoritmos);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_I);
    aprobada_subject(Cursilllo_de_Ingreso);
    aprobada_subject(Matematica_discreta_I);
    aprobada_subject(Algoritmos_y_estructura_de_Datos_II)
    aprobada_subject_out(Analisis_Numerico);
    aprobada_subject_out(Matematica_discreta_II);
    aprobada_subject_out(Paradigma_de_programacion);
    aprobada_subject_out(Redes_y_sistemas_distribuidos);
    aprobada_subject_out(Bases_de_datos);
    aprobada_subject_out(Arquitectura_de_computadora);
    aprobada_subject_out(Ingenieria_de_software_I);
    aprobada_subject_out(Lenguajes_formales_y_compatibilidad);
    aprobada_subject_out(Modelos_de_simulacion);
    aprobada_subject_out(Analisis_Matematico_II);
    aprobada_subject_out(Logica);
    aprobada_subject_out(Probabilidad_y_estadistica);
    aprobada_subject_out(Sistemas_operativos);
    aprobada_subject_out(Organizacion_del_Computador);
    aprobada_subject_out(Analisis_Matematico_I);
    aprobada_subject_out(Algebra);
    aprobada_subject_out(Fisica)});


    