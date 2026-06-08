import type { Question } from "@/app/components/InteractiveTest";

export const ud1Questions: Question[] = [
  {
    question: "¿Qué es una serie temporal?",
    options: [
      "Una secuencia de observaciones de una variable aleatoria ordenadas en el tiempo",
      "Un conjunto de variables independientes entre sí observadas en un instante",
      "Una función determinista del tiempo sin componente aleatoria",
      "Una muestra de datos sin estructura temporal",
    ],
  },
  {
    question: "¿Qué condiciones define la estacionariedad débil (covarianza-estacionaria)?",
    options: [
      "Media constante, varianza constante y covarianza que depende solo del lag k",
      "Media y varianza que crecen linealmente con el tiempo",
      "Distribución marginal idéntica en cada instante temporal",
      "Ausencia total de autocorrelación para cualquier lag",
    ],
  },
  {
    question: "¿Qué mide la función de autocorrelación (ACF) en el lag k?",
    options: [
      "La correlación entre Y_t e Y_{t-k}",
      "La correlación entre Y_t e Y_{t-k} eliminando el efecto de los lags intermedios",
      "La varianza condicional de la serie en el instante k",
      "El valor esperado de la serie k pasos hacia adelante",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre ACF y PACF?",
    options: [
      "La PACF controla el efecto de los lags intermedios; la ACF no",
      "La ACF solo aplica a procesos estacionarios; la PACF a cualquier serie",
      "La PACF mide solo correlaciones positivas; la ACF también las negativas",
      "Son equivalentes cuando la serie es estacionaria",
    ],
  },
  {
    question: "¿Qué es un proceso de Ruido Blanco?",
    options: [
      "Un proceso con media cero, varianza constante y autocorrelación nula para todo lag ≠ 0",
      "Un proceso estacionario cuya ACF decae exponencialmente",
      "Una serie temporal con media y varianza constantes pero autocorrelación positiva en lag 1",
      "Un proceso integrado de orden 1 con media cero",
    ],
  },
  {
    question: "En el modelo AR(1): Y_t = φY_{t-1} + ε_t, ¿cuándo es estacionario?",
    options: [
      "Cuando |φ| < 1",
      "Cuando φ > 0",
      "Cuando φ = 1",
      "Cuando φ < 0",
    ],
  },
  {
    question: "¿Qué patrón muestra la PACF de un proceso AR(p)?",
    options: [
      "Se corta abruptamente tras el lag p; es cero para lags > p",
      "Decae gradualmente hacia cero de forma exponencial",
      "Oscila con período igual a p",
      "Es siempre positiva para todos los lags ≤ p",
    ],
  },
  {
    question: "¿Qué patrón muestra la ACF de un proceso MA(q)?",
    options: [
      "Se corta abruptamente tras el lag q; es cero para lags > q",
      "Decae gradualmente hacia cero",
      "Es siempre negativa para lags ≤ q",
      "Se corta abruptamente tras el lag p, no el q",
    ],
  },
  {
    question: "Si φ = 1 en un AR(1), el proceso es...",
    options: [
      "No estacionario (Random Walk)",
      "Estacionario con alta persistencia",
      "Un proceso de Ruido Blanco",
      "Estacionario con rápida reversión a la media",
    ],
  },
  {
    question: "¿Qué test formal se utiliza para detectar raíces unitarias?",
    options: [
      "Test de Dickey-Fuller Aumentado (ADF)",
      "Test de Ljung-Box",
      "Test de Jarque-Bera",
      "Test de Granger",
    ],
  },
  {
    question: "En el test ADF, un p-valor < 0.05 indica...",
    options: [
      "Se rechaza H₀; la serie es estacionaria",
      "No se rechaza H₀; la serie tiene raíz unitaria",
      "La serie necesita diferenciación de segundo orden",
      "La serie es integrada de orden 2",
    ],
  },
  {
    question: "¿Cómo se llama el parámetro φ en un AR(1)?",
    options: [
      "Parámetro de persistencia",
      "Parámetro de integración",
      "Coeficiente de media móvil",
      "Índice de estacionariedad",
    ],
  },
  {
    question: "Si la ACF de una serie decae muy lentamente hacia cero, indica...",
    options: [
      "Probable raíz unitaria; la serie es no estacionaria",
      "La serie es Ruido Blanco",
      "El proceso es MA(q) puro",
      "La varianza es constante a lo largo del tiempo",
    ],
  },
  {
    question: "¿Qué transformación se aplica habitualmente para estabilizar una varianza creciente?",
    options: [
      "Transformación logarítmica: Y_t* = log(Y_t)",
      "Diferenciación de primer orden",
      "Estandarización (media 0, varianza 1)",
      "Elevación al cuadrado",
    ],
  },
  {
    question: "¿Para qué sirve la diferenciación de primer orden ΔY_t = Y_t − Y_{t-1}?",
    options: [
      "Eliminar tendencias lineales y conseguir estacionariedad",
      "Eliminar la estacionalidad de la serie",
      "Estabilizar la varianza de la serie",
      "Normalizar la distribución de los residuos",
    ],
  },
  {
    question: "La autocorrelación de un AR(1) entre Y_t e Y_{t-k} es igual a...",
    options: [
      "φ^k",
      "φ / k",
      "k · φ",
      "φ + k",
    ],
    explanation: "La autocorrelación decae exponencialmente: ρ_k = Cor(Y_t, Y_{t-k}) = φ^k",
  },
  {
    question: "En un AR(1) con φ = 0.9, la autocorrelación en lag 2 es aproximadamente...",
    options: ["0.81", "0.9", "0.18", "0.45"],
    explanation: "ρ_2 = φ^2 = 0.9² = 0.81",
  },
  {
    question: "¿Cuándo k→∞ con |φ|<1 en un AR(1), qué ocurre con φ^k?",
    options: [
      "φ^k → 0; la autocorrelación desaparece en el largo plazo",
      "φ^k → 1; la serie se vuelve estacionaria",
      "φ^k → ∞; la varianza crece indefinidamente",
      "φ^k → φ; converge al parámetro original",
    ],
  },
  {
    question: "¿Qué es el operador de retardo B?",
    options: [
      "B · Y_t = Y_{t-1}",
      "B · Y_t = Y_{t+1}",
      "B · Y_t = ΔY_t",
      "B · Y_t = E[Y_t]",
    ],
  },
  {
    question: "Un proceso es I(1) si...",
    options: [
      "Es no estacionario pero se vuelve estacionario tras una diferenciación",
      "Es estacionario sin necesidad de diferenciación",
      "Necesita dos diferenciaciones para ser estacionario",
      "Tiene media cero y varianza unitaria",
    ],
  },
  {
    question: "En un AR(1) con φ negativo (ej. φ = −0.9), la serie presenta...",
    options: [
      "Oscilaciones alternadas de signo con decaimiento hacia la media",
      "Tendencia creciente indefinida",
      "Correlaciones siempre positivas para todos los lags",
      "Comportamiento idéntico al Random Walk",
    ],
  },
  {
    question: "Si tanto la ACF como la PACF decaen gradualmente, el proceso probablemente es...",
    options: [
      "ARMA(p,q)",
      "AR(p) puro",
      "MA(q) puro",
      "Ruido Blanco",
    ],
  },
  {
    question: "¿Cuál es la media incondicional de Y_t = c + φY_{t-1} + ε_t?",
    options: [
      "c / (1 − φ)",
      "c",
      "φ",
      "c + φ",
    ],
  },
  {
    question: "El modelo AR(2) se escribe como...",
    options: [
      "Y_t = c + φ₁Y_{t-1} + φ₂Y_{t-2} + ε_t",
      "Y_t = c + φY_{t-2} + ε_t",
      "Y_t = φ₁ε_{t-1} + φ₂ε_{t-2} + ε_t",
      "Y_t = c + φ₁Y_{t-1} + θ₁ε_{t-1} + ε_t",
    ],
  },
  {
    question: "¿Cuándo se dice que un AR(2) es no estacionario (Nonstationary AR(2))?",
    options: [
      "Cuando φ₁ + φ₂ ≥ 1 (raíces en el círculo unitario o fuera)",
      "Cuando φ₁ < 0 o φ₂ < 0",
      "Cuando la constante c = 0",
      "Siempre que φ₂ ≠ 0",
    ],
  },
  {
    question: "¿Qué indica una disminución rápida de la ACF hacia cero?",
    options: [
      "La serie es estacionaria (no hay dependencia a largo plazo)",
      "La serie tiene raíz unitaria",
      "El proceso es AR de orden elevado",
      "La varianza crece con el tiempo",
    ],
  },
  {
    question: "¿Qué describe la ACF parcial de un AR(2)?",
    options: [
      "Solo los picos r₁ y r₂ son distintos de cero; para k > 2 son cero",
      "Todos los picos decaen gradualmente hasta el lag 2",
      "La ACF parcial es idéntica a la ACF total en AR(2)",
      "Solo el pico r₁ es distinto de cero",
    ],
  },
  {
    question: "En el modelo AR(2): Y_t = 1 + Y_{t-1} − 0.5Y_{t-2} + ε_t, el valor de φ₁ + φ₂ es...",
    options: ["0.5", "1.5", "−0.5", "0"],
    explanation: "φ₁ = 1, φ₂ = −0.5, por tanto φ₁ + φ₂ = 0.5",
  },
  {
    question: "¿Cuál es el principal objetivo de la metodología Box-Jenkins?",
    options: [
      "Ajustar modelos ARIMA a series temporales reales de forma iterativa",
      "Eliminar la estacionalidad de cualquier serie temporal",
      "Calcular la media y varianza incondicional de un proceso",
      "Transformar series no estacionarias en procesos de Ruido Blanco",
    ],
  },
  {
    question: "La metodología Box-Jenkins fue desarrollada en el año...",
    options: ["1970", "1985", "1950", "1995"],
  },
];

export const ud2Questions: Question[] = [
  {
    question: "¿Cuáles son los 5 pasos de la metodología Box-Jenkins?",
    options: [
      "Visualización → Identificación → Estimación → Diagnóstico → Predicción",
      "Diferenciación → Estimación → Validación → Predicción → Publicación",
      "EDA → Transformación → Ajuste → Corrección → Pronóstico",
      "ACF → PACF → ADF → ARIMA → Residuos",
    ],
  },
  {
    question: "¿Qué representa d en un modelo ARIMA(p,d,q)?",
    options: [
      "El número de diferenciaciones necesarias para estacionarizar la serie",
      "El orden del componente autorregresivo",
      "El orden del componente de media móvil",
      "El número de observaciones de la muestra",
    ],
  },
  {
    question: "¿Qué es el modelo ARIMA(0,1,0)?",
    options: [
      "Random Walk: Y_t = Y_{t-1} + ε_t",
      "AR(1): Y_t = φY_{t-1} + ε_t",
      "MA(1): Y_t = ε_t + θε_{t-1}",
      "Ruido Blanco puro",
    ],
  },
  {
    question: "¿Qué es el modelo ARIMA(0,1,1)?",
    options: [
      "Equivale al suavizado exponencial simple",
      "Equivale a un AR(1) diferenciado",
      "Es un Random Walk con deriva",
      "Equivale a un MA(1) estacionario",
    ],
  },
  {
    question: "En el modelo MA(1): Y_t = μ + θε_{t-1} + ε_t, ¿qué representa θ?",
    options: [
      "Coeficiente que pondera el impacto del error pasado sobre el valor presente",
      "El parámetro de persistencia autorregresivo",
      "La media incondicional del proceso",
      "El orden de integración del proceso",
    ],
  },
  {
    question: "¿En qué se diferencia un modelo MA(q) de un AR(p)?",
    options: [
      "El MA expresa Y_t como combinación lineal de errores pasados; el AR usa valores pasados de Y",
      "El MA es siempre no estacionario; el AR puede ser estacionario",
      "El AR solo tiene un parámetro; el MA puede tener varios",
      "No hay diferencia práctica; ambos modelan el mismo fenómeno",
    ],
  },
  {
    question: "¿Cuándo es invertible un proceso MA(q)?",
    options: [
      "Cuando las raíces del polinomio θ(B) = 0 están fuera del círculo unitario",
      "Cuando |θ| < 1 para todos los coeficientes",
      "Siempre; todos los procesos MA son invertibles",
      "Cuando el proceso tiene media cero",
    ],
  },
  {
    question: "¿Qué modelo combina componentes AR y MA?",
    options: [
      "ARMA(p,q): φ(B)·Y_t = θ(B)·ε_t",
      "ARIMA(p,d,q) con d > 0",
      "SARIMA con componente estacional",
      "AR(p) con diferenciación de segundo orden",
    ],
  },
  {
    question: "El paso de diagnóstico en Box-Jenkins consiste en...",
    options: [
      "Analizar los residuos para verificar que se comportan como Ruido Blanco",
      "Seleccionar los órdenes p y q mediante ACF y PACF",
      "Estimar los parámetros por Máxima Verosimilitud",
      "Generar predicciones h pasos hacia adelante",
    ],
  },
  {
    question: "¿Qué test se usa para verificar que los residuos son Ruido Blanco?",
    options: [
      "Test de Ljung-Box",
      "Test de Dickey-Fuller Aumentado (ADF)",
      "Test de Jarque-Bera",
      "Test F de Fisher",
    ],
  },
  {
    question: "En el test de Ljung-Box, un p-valor > 0.05 sobre los residuos indica...",
    options: [
      "Los residuos no presentan autocorrelación; el modelo es adecuado",
      "Los residuos tienen autocorrelación significativa; el modelo es incorrecto",
      "La serie original es no estacionaria",
      "Los residuos siguen una distribución normal",
    ],
  },
  {
    question: "¿Cómo se determina el orden de diferenciación d en Box-Jenkins?",
    options: [
      "Mediante el test ADF: se diferencia hasta que la serie sea estacionaria",
      "Observando el número de picos significativos en la ACF",
      "Minimizando el criterio AIC en una búsqueda sobre valores de d",
      "Siempre se usa d = 1 por convención",
    ],
  },
  {
    question: "¿Qué implica que la PACF se corte tras el lag 2 en la serie diferenciada?",
    options: [
      "El componente autorregresivo tiene orden p = 2",
      "El componente de media móvil tiene orden q = 2",
      "La serie necesita dos diferenciaciones más",
      "El modelo ARIMA tiene d = 2",
    ],
  },
  {
    question: "¿Qué implica que la ACF se corte tras el lag 1 en la serie diferenciada?",
    options: [
      "El componente de media móvil tiene orden q = 1",
      "El componente autorregresivo tiene orden p = 1",
      "La serie es estacionaria sin diferenciación",
      "El modelo tiene d = 1 en el operador de integración",
    ],
  },
  {
    question: "¿Qué método se usa principalmente para estimar los parámetros ARIMA?",
    options: [
      "Máxima Verosimilitud (MLE)",
      "Mínimos Cuadrados Ordinarios (OLS) siempre",
      "Método de momentos generalizado (GMM)",
      "Regresión Ridge con regularización",
    ],
  },
  {
    question: "El intervalo de predicción al 95% para un horizonte h es...",
    options: [
      "Ŷ_{T+h} ± 1.96 · σ_h",
      "Ŷ_{T+h} ± 1.64 · σ",
      "Ŷ_{T+h} ± 2σ / √n",
      "Ŷ_{T+h} ± σ_h / h",
    ],
    explanation: "σ_h es la desviación estándar del error de predicción h pasos adelante, que crece con h.",
  },
  {
    question: "¿Por qué crece la incertidumbre del intervalo de predicción con el horizonte h?",
    options: [
      "Porque σ_h aumenta con h al acumularse los errores de predicción",
      "Porque la serie se vuelve no estacionaria al predecir",
      "Porque el número de parámetros aumenta con h",
      "No crece; los intervalos son constantes para cualquier h",
    ],
  },
  {
    question: "¿Qué es el modelo ARMA(p,q)?",
    options: [
      "Un modelo que combina AR(p) y MA(q): más parsimonioso que cada uno por separado",
      "Un ARIMA(p,0,q) con diferenciación cero",
      "Solo el modelo AR(p) con errores MA",
      "Un modelo exclusivamente para series estacionarias de frecuencia diaria",
    ],
  },
  {
    question: "¿En qué caso ARIMA(1,0,0) es equivalente a AR(1)?",
    options: [
      "Siempre: ARIMA(1,0,0) = AR(1) estacionario",
      "Solo cuando la constante c = 0",
      "Solo cuando la serie es transformada en logaritmos",
      "Solo cuando los residuos son normales",
    ],
  },
  {
    question: "Si en el paso de diagnóstico los residuos muestran autocorrelación, ¿qué se hace?",
    options: [
      "Volver al paso de identificación y proponer un modelo revisado con mayor p o q",
      "Aumentar el orden de diferenciación d",
      "Aplicar una transformación logarítmica a la serie",
      "Aceptar el modelo igualmente si el AIC es bajo",
    ],
  },
  {
    question: "¿Cuántas diferenciaciones se aplican habitualmente en la práctica?",
    options: [
      "d = 1 cubre la mayoría de los casos",
      "d = 2 es el estándar para datos económicos",
      "d = 0 si la serie tiene tendencia visual",
      "d depende siempre del número de observaciones",
    ],
  },
  {
    question: "¿Qué hace la función auto.arima() de R o ARIMA() de statsmodels?",
    options: [
      "Selecciona automáticamente p, d, q minimizando un criterio de información",
      "Siempre ajusta un ARIMA(1,1,1) como modelo por defecto",
      "Estima solo el orden de diferenciación d",
      "Calcula únicamente el ACF y PACF de la serie",
    ],
  },
  {
    question: "La condición de estacionariedad para un ARMA(p,q) se refiere a...",
    options: [
      "Las raíces del polinomio AR φ(B) = 0 deben estar fuera del círculo unitario",
      "Las raíces del polinomio MA θ(B) = 0 deben estar fuera del círculo unitario",
      "Que tanto p como q sean menores que 3",
      "Que la serie no tenga tendencia visual",
    ],
  },
  {
    question: "¿Qué representa el 'I' de ARIMA?",
    options: [
      "Integrado: la serie ha sido diferenciada d veces para hacerla estacionaria",
      "Invertible: el componente MA es invertible",
      "Individual: modelo univariante para una sola serie",
      "Iterativo: refleja el proceso iterativo de Box-Jenkins",
    ],
  },
  {
    question: "En el correlograma de un AR(2) estacionario, la PACF muestra...",
    options: [
      "Exactamente dos picos significativos (lag 1 y lag 2), el resto son cero",
      "Tres picos significativos seguidos de decaimiento gradual",
      "Solo el pico en lag 1 es significativo",
      "Todos los picos son significativos hasta el lag p+q",
    ],
  },
  {
    question: "¿Qué modelo de series temporales fue propuesto originalmente por Box y Jenkins en 1970?",
    options: [
      "ARIMA (Autoregressive Integrated Moving Average)",
      "GARCH (Generalized Autoregressive Conditional Heteroskedasticity)",
      "SARIMA (Seasonal ARIMA)",
      "VAR (Vector Autoregression)",
    ],
  },
  {
    question: "En el modelo MA(1): Y_t = μ + θε_{t-1} + ε_t, ¿cuántos lags tiene la ACF distintos de cero?",
    options: [
      "Solo lag 1; la ACF es cero para todos los lags > 1",
      "Todos los lags tienen ACF distinta de cero",
      "Los lags 1 y 2 son distintos de cero",
      "Depende del valor de θ",
    ],
  },
  {
    question: "¿Cuál es la notación compacta del modelo AR(p) usando el operador B?",
    options: [
      "φ(B) · Y_t = ε_t, donde φ(B) = 1 − φ₁B − ··· − φ_pBᵖ",
      "Y_t = φ(B) · ε_t",
      "B · φ(Y_t) = ε_t",
      "φ(B) = Y_t + ε_t",
    ],
  },
  {
    question: "En el paso de visualización (EDA) de Box-Jenkins, ¿qué se busca detectar?",
    options: [
      "Tendencias, estacionalidad, outliers y varianza no constante",
      "Solo la presencia de raíces unitarias",
      "El número exacto de parámetros del modelo",
      "La distribución normal de los residuos",
    ],
  },
  {
    question: "¿Qué ocurre si d = 2 en un ARIMA(p,2,q)?",
    options: [
      "Se han aplicado dos diferenciaciones; puede indicar tendencia cuadrática en la serie original",
      "El modelo solo es válido para series diarias",
      "Los parámetros AR y MA se anulan entre sí",
      "La predicción es siempre constante",
    ],
  },
];

export const ud3Questions: Question[] = [
  {
    question: "¿Qué es un modelo SARIMA?",
    options: [
      "Un ARIMA con componentes estacionales adicionales de orden (P,D,Q)_s",
      "Un ARIMA aplicado a series con valores siempre positivos",
      "Un modelo AR puro con diferenciación estacional",
      "Un modelo de suavizado exponencial con estacionalidad",
    ],
  },
  {
    question: "¿Qué notación completa tiene un modelo SARIMA?",
    options: [
      "SARIMA(p,d,q)×(P,D,Q)_s",
      "SARIMA(p,q,d,P,Q,D)",
      "ARIMA(p,d,q,s)",
      "SARIMAX(p,d,q)(P,D,Q)",
    ],
  },
  {
    question: "En SARIMA(p,d,q)×(P,D,Q)_s, ¿qué representa s?",
    options: [
      "El período estacional (ej. s=12 para datos mensuales, s=4 trimestrales)",
      "El número de diferenciaciones estacionales",
      "El orden del componente autorregresivo estacional",
      "El tamaño de la muestra",
    ],
  },
  {
    question: "¿Qué hace la diferenciación estacional de orden 1 con período s?",
    options: [
      "ΔsY_t = Y_t − Y_{t-s}: elimina la estacionalidad de período s",
      "ΔsY_t = Y_t − Y_{t-1}: elimina la tendencia a corto plazo",
      "Transforma la serie en logaritmos para estabilizar la varianza",
      "Divide la serie por su desviación estándar",
    ],
  },
  {
    question: "Para datos mensuales con estacionalidad anual, el período estacional es...",
    options: [
      "s = 12",
      "s = 4",
      "s = 52",
      "s = 365",
    ],
  },
  {
    question: "Para datos trimestrales con estacionalidad anual, s es...",
    options: [
      "s = 4",
      "s = 12",
      "s = 3",
      "s = 7",
    ],
  },
  {
    question: "¿Qué indica D en SARIMA(p,d,q)×(P,D,Q)_s?",
    options: [
      "El número de diferenciaciones estacionales aplicadas",
      "El orden del componente de media móvil estacional",
      "El número de diferenciaciones regulares",
      "El período estacional de la serie",
    ],
  },
  {
    question: "¿Cómo se identifica visualmente una serie con estacionalidad?",
    options: [
      "La ACF muestra picos significativos en los lags múltiplos de s (s, 2s, 3s...)",
      "La PACF se corta abruptamente tras el lag 1",
      "La serie no tiene tendencia pero sí varianza creciente",
      "El test ADF indica que la serie es estacionaria",
    ],
  },
  {
    question: "Un modelo SARIMA(0,1,1)×(0,1,1)_12 es conocido como...",
    options: [
      "Modelo de las aerolíneas (Airline Model) de Box y Jenkins",
      "Modelo de suavizado exponencial de Holt-Winters",
      "Modelo AR estacional con 12 rezagos",
      "Modelo de regresión con errores MA",
    ],
  },
  {
    question: "¿Qué diferencia hay entre los parámetros (p,d,q) y (P,D,Q) en SARIMA?",
    options: [
      "(p,d,q) son componentes regulares a corto plazo; (P,D,Q) son componentes estacionales",
      "(p,d,q) aplican a la tendencia; (P,D,Q) aplican a los residuos",
      "(P,D,Q) son siempre más grandes que (p,d,q)",
      "No hay diferencia; se usan indistintamente",
    ],
  },
  {
    question: "¿Qué ocurre si se aplica diferenciación regular (d=1) pero no estacional (D=0) a una serie con estacionalidad?",
    options: [
      "La tendencia se elimina pero la estacionalidad persiste en los residuos",
      "La serie queda completamente estacionaria",
      "Se introduce una raíz unitaria estacional artificial",
      "El modelo se vuelve equivalente a un ARIMA(0,0,0)",
    ],
  },
  {
    question: "¿Cómo se detenta una raíz unitaria estacional?",
    options: [
      "Con el test de Canova-Hansen o HEGY aplicado en el lag s",
      "Con el test ADF aplicado a la serie original",
      "Observando que la PACF tiene un pico en lag 1",
      "Con el test de Ljung-Box sobre los residuos",
    ],
  },
  {
    question: "En el modelo SARIMA(1,0,0)×(1,0,0)_12, ¿cuántos parámetros AR tiene?",
    options: [
      "2 parámetros: φ₁ (regular) y Φ₁ (estacional)",
      "1 parámetro: solo el AR regular",
      "12 parámetros: uno por mes",
      "3 parámetros: φ₁, Φ₁ y la constante",
    ],
  },
  {
    question: "¿Qué es el operador de retardo estacional B^s?",
    options: [
      "B^s · Y_t = Y_{t-s}: retrocede s períodos en el tiempo",
      "B^s · Y_t = Y_{t-1}: retrocede 1 período estándar",
      "B^s · Y_t = ΔY_t: aplica una diferenciación regular",
      "B^s · Y_t = Y_t / s: normaliza por el período",
    ],
  },
  {
    question: "Si la ACF de una serie tiene picos en lags 12, 24, 36... pero no entre ellos, la estacionalidad es...",
    options: [
      "Estacional pura (solo la componente estacional, sin AR/MA regular significativo)",
      "Tendencial sin estacionalidad",
      "Ruido Blanco estacional",
      "Integración de orden 2",
    ],
  },
  {
    question: "Para identificar los órdenes (P,Q) del componente estacional en SARIMA, se examinan...",
    options: [
      "Los picos de ACF y PACF en los lags múltiplos de s (s, 2s, 3s...)",
      "Los picos de ACF y PACF en los lags 1, 2, 3...",
      "El criterio AIC para todos los órdenes posibles",
      "Solo la PACF, no la ACF",
    ],
  },
  {
    question: "¿Cuándo es necesario aplicar D=1 en un SARIMA?",
    options: [
      "Cuando la serie tiene una raíz unitaria estacional (estacionalidad no estacionaria)",
      "Siempre que exista estacionalidad de cualquier tipo",
      "Solo cuando s > 12",
      "Cuando la serie es estacionaria a nivel regular",
    ],
  },
  {
    question: "El modelo SARIMA(0,1,1)×(0,1,1)_12 fue usado originalmente para modelar...",
    options: [
      "El número de pasajeros de aerolíneas (datos mensuales 1949-1960)",
      "Precios del petróleo con estacionalidad trimestral",
      "Temperatura mensual de una ciudad europea",
      "Ventas trimestrales del sector retail",
    ],
  },
  {
    question: "¿Qué es la diferenciación doble en SARIMA?",
    options: [
      "Aplicar diferenciación regular (d=1) y estacional (D=1): W_t = Δ₁Δ_s Y_t",
      "Aplicar dos diferenciaciones regulares (d=2)",
      "Diferenciar la serie respecto a su tendencia y luego respecto a su estacionalidad por separado",
      "Calcular (Y_t − Y_{t-1}) / (Y_{t-s} − Y_{t-s-1})",
    ],
  },
  {
    question: "¿Cómo se diagnostica un modelo SARIMA ajustado?",
    options: [
      "Verificando que los residuos son Ruido Blanco (ACF de residuos no significativa, test Ljung-Box)",
      "Comprobando que el AIC es negativo",
      "Verificando que todos los parámetros son estadísticamente distintos de cero",
      "Comparando las predicciones con una media móvil simple",
    ],
  },
  {
    question: "Si en los residuos de un SARIMA aparecen picos en la ACF en lags múltiplos de s, se debe...",
    options: [
      "Aumentar el orden P o Q del componente estacional",
      "Aumentar el orden p o q del componente regular",
      "Aplicar una diferenciación regular adicional (aumentar d)",
      "Aceptar el modelo si el AIC es aceptable",
    ],
  },
  {
    question: "¿Cuál de estas series probablemente requiere un modelo SARIMA?",
    options: [
      "Ventas mensuales de helados con picos cada verano",
      "Precio diario de un activo financiero",
      "Temperatura promedio anual global desde 1900",
      "Número de llamadas a un call center en un día laborable",
    ],
  },
  {
    question: "En SARIMA, ¿qué representa el término P?",
    options: [
      "El orden del componente autorregresivo estacional (AR estacional)",
      "El período de la estacionalidad",
      "El número de predicciones a realizar",
      "La probabilidad de que la serie sea estacionaria",
    ],
  },
  {
    question: "¿Cómo afecta el valor de s al número de observaciones necesarias para ajustar bien un SARIMA?",
    options: [
      "Mayor s requiere más observaciones para estimar bien la componente estacional",
      "Mayor s reduce el número de observaciones necesarias",
      "s no afecta al tamaño muestral necesario",
      "Se necesitan exactamente s × (p+P) observaciones",
    ],
  },
  {
    question: "¿Qué es la estacionalidad determinista vs. estocástica?",
    options: [
      "Determinista: patrón fijo (modelo regresión); Estocástica: estacionalidad con raíz unitaria (D=1 en SARIMA)",
      "Determinista: con tendencia; Estocástica: sin tendencia",
      "Determinista: datos mensuales; Estocástica: datos diarios",
      "No hay diferencia; ambas se modelan con SARIMA(P,D,Q)",
    ],
  },
  {
    question: "¿Cuál es la ventaja del SARIMA sobre añadir variables dummy estacionales en una regresión?",
    options: [
      "SARIMA captura dinámica estocástica compleja; las dummies solo capturan efectos fijos estacionales",
      "SARIMA siempre predice mejor con cualquier conjunto de datos",
      "SARIMA es más fácil de interpretar que una regresión con dummies",
      "SARIMA no requiere estimar parámetros adicionales",
    ],
  },
  {
    question: "Para datos semanales con estacionalidad anual, el valor de s sería...",
    options: [
      "s = 52 (semanas en un año)",
      "s = 12 (meses en un año)",
      "s = 7 (días de la semana)",
      "s = 365 (días en un año)",
    ],
  },
  {
    question: "Si el orden D=1 elimina la raíz unitaria estacional, ¿cuántas diferenciaciones estacionales totales se han aplicado?",
    options: [
      "Una diferenciación estacional: W_t = Y_t − Y_{t-s}",
      "Ninguna; D=1 significa que la serie ya es estacionaria",
      "Dos diferenciaciones: una regular y una estacional",
      "s diferenciaciones regulares equivalentes",
    ],
  },
];

export const ud4Questions: Question[] = [
  {
    question: "¿Qué problema surge al aplicar OLS a una regresión donde los errores están autocorrelacionados?",
    options: [
      "Los estimadores OLS son ineficientes y los errores estándar son incorrectos (inferencia inválida)",
      "Los estimadores OLS son inconsistentes y sesgados",
      "No hay problema; OLS es robusto a la autocorrelación de los errores",
      "El modelo se vuelve no identificable",
    ],
  },
  {
    question: "¿Cómo se detecta la autocorrelación en los residuos de una regresión?",
    options: [
      "Graficando la ACF de los residuos o con el test de Ljung-Box",
      "Mirando el valor del R² ajustado",
      "Con el test de normalidad Jarque-Bera",
      "Comparando AIC y BIC del modelo",
    ],
  },
  {
    question: "¿Qué es el estadístico de Durbin-Watson?",
    options: [
      "Un test para detectar autocorrelación de primer orden en los residuos de una regresión",
      "Un criterio de selección de modelos basado en la verosimilitud",
      "Una medida de la bondad de ajuste del modelo",
      "Un test de raíz unitaria para los residuos",
    ],
  },
  {
    question: "¿Cuál es el procedimiento de 3 pasos para una regresión con errores de series temporales?",
    options: [
      "1) Estimar OLS y guardar residuos; 2) Identificar modelo ARIMA para los residuos; 3) Estimar conjuntamente el modelo completo por MLE",
      "1) Diferenciar la serie; 2) Aplicar OLS; 3) Verificar los residuos",
      "1) Transformar en logaritmos; 2) Ajustar ARIMA; 3) Invertir la transformación",
      "1) Aplicar ARIMA a Y; 2) Aplicar ARIMA a X; 3) Combinar ambas predicciones",
    ],
  },
  {
    question: "¿Qué es un modelo ARIMAX?",
    options: [
      "Un ARIMA extendido con variables exógenas (regresores externos)",
      "Un ARIMA con componente estacional multiplicativa",
      "Un modelo AR con media móvil integrada de orden X",
      "Un ARIMA aplicado solo a datos financieros (X = exchange)",
    ],
  },
  {
    question: "En el modelo Y_t = β₀ + β₁X_t + η_t, si η_t sigue un ARMA(p,q), ¿cómo se estima correctamente?",
    options: [
      "Estimación conjunta de β y los parámetros ARMA por Máxima Verosimilitud",
      "OLS en dos etapas: primero β, luego los parámetros ARMA",
      "Solo OLS, ya que los parámetros ARMA no afectan a β",
      "Regresión de los residuos sobre los valores pasados de X",
    ],
  },
  {
    question: "¿Qué representa β₁ en una regresión de series temporales?",
    options: [
      "El efecto promedio de X sobre Y manteniendo el resto constante (efecto contemporáneo)",
      "La autocorrelación de primer orden de Y",
      "El coeficiente de la media móvil del error",
      "La varianza condicional del error en el período t",
    ],
  },
  {
    question: "¿Por qué es importante modelar los errores η_t con ARMA en vez de asumir independencia?",
    options: [
      "Para obtener estimaciones eficientes e inferencia estadística válida",
      "Porque OLS no puede calcular los coeficientes con errores autocorrelacionados",
      "Para poder usar el test ADF en los regresores",
      "Para evitar la multicolinealidad entre variables",
    ],
  },
  {
    question: "¿Qué indica un valor del estadístico Durbin-Watson cercano a 2?",
    options: [
      "No hay autocorrelación de primer orden en los residuos",
      "Hay autocorrelación positiva fuerte",
      "Hay autocorrelación negativa fuerte",
      "Los residuos no son normales",
    ],
  },
  {
    question: "¿Qué indica un Durbin-Watson cercano a 0?",
    options: [
      "Autocorrelación positiva fuerte en los residuos",
      "Autocorrelación negativa fuerte en los residuos",
      "No hay autocorrelación",
      "Heterocedasticidad en los residuos",
    ],
  },
  {
    question: "¿Cuál es la ventaja de la estimación conjunta (MLE) frente al procedimiento de 2 etapas?",
    options: [
      "Es asintóticamente eficiente; aprovecha toda la información del modelo de forma simultánea",
      "Es computacionalmente más sencilla",
      "No requiere especificar el modelo ARMA para los errores",
      "Produce estimaciones idénticas al OLS para muestras grandes",
    ],
  },
  {
    question: "¿En qué se diferencia ARIMAX de regresión con errores ARIMA?",
    options: [
      "En ARIMAX, la diferenciación se aplica tanto a Y como a X; en regresión con errores ARIMA, solo a los errores",
      "ARIMAX usa estimación bayesiana; la regresión con errores ARIMA usa MLE",
      "No hay diferencia práctica entre ambos enfoques",
      "ARIMAX solo aplica a series estacionarias; la regresión con errores ARIMA a cualquier serie",
    ],
  },
  {
    question: "Si los residuos de la regresión OLS muestran un pico en la ACF en lag 1, ¿qué modelo de error se propone?",
    options: [
      "AR(1) para los errores: η_t = φη_{t-1} + ε_t",
      "MA(2) para los errores: η_t = ε_t + θ₂ε_{t-2}",
      "ARIMA(0,1,0) para los errores",
      "Ninguno; un solo pico no es significativo",
    ],
  },
  {
    question: "¿Qué ocurre con el R² en presencia de autocorrelación positiva de los residuos?",
    options: [
      "Tiende a estar inflado; sugiere un ajuste mejor del real",
      "Tiende a estar deflado; el modelo parece peor de lo que es",
      "No se ve afectado; el R² es robusto a la autocorrelación",
      "Se vuelve negativo siempre que hay autocorrelación",
    ],
  },
  {
    question: "¿Cuál es el objetivo del paso 1 del procedimiento de 3 pasos?",
    options: [
      "Estimar OLS para obtener los residuos que se usarán para identificar el modelo de errores",
      "Aplicar el test ADF a todas las variables del modelo",
      "Seleccionar las variables más relevantes mediante criterio stepwise",
      "Diferenciar todas las variables hasta que sean estacionarias",
    ],
  },
  {
    question: "En el modelo Y_t = β₀ + β₁X_t + η_t con η_t = AR(1), el modelo completo tiene...",
    options: [
      "3 parámetros: β₀, β₁, φ (más la varianza del error)",
      "2 parámetros: β₀ y β₁ únicamente",
      "4 parámetros: β₀, β₁, φ y el lag de X",
      "Solo 1 parámetro libre: φ",
    ],
  },
  {
    question: "¿Cuándo se usa una regresión con errores de ST en lugar de un ARIMA puro?",
    options: [
      "Cuando hay variables explicativas X_t que teóricamente causan la variación de Y_t",
      "Siempre que la serie Y_t sea no estacionaria",
      "Solo cuando se dispone de datos de frecuencia diaria o mayor",
      "Cuando el modelo ARIMA puro tiene R² > 0.9",
    ],
  },
  {
    question: "¿Qué es la regresión espuria en series temporales?",
    options: [
      "Una correlación aparentemente alta entre dos series no estacionarias sin relación causal real",
      "Un modelo de regresión con autocorrelación en los residuos",
      "Una regresión con errores de distribución no normal",
      "Un modelo con demasiados regresores y overfitting",
    ],
  },
  {
    question: "¿Qué es la cointegración y cuándo es relevante en regresión de ST?",
    options: [
      "Cuando dos series I(1) tienen una combinación lineal que es I(0); la regresión no es espuria",
      "Cuando dos series tienen la misma tendencia determinista",
      "Cuando los residuos de la regresión son MA(1)",
      "Cuando el R² de la regresión supera 0.95",
    ],
  },
  {
    question: "En el paso 2 del procedimiento de 3 pasos, se examina la ACF de los residuos OLS para...",
    options: [
      "Identificar el modelo ARIMA más adecuado para los errores (seleccionar p y q)",
      "Verificar que el modelo está correctamente especificado",
      "Calcular el intervalo de confianza para β₁",
      "Detectar outliers en los residuos",
    ],
  },
  {
    question: "¿Puede incluirse la variable dependiente rezagada Y_{t-1} como regresor en un modelo de ST?",
    options: [
      "Sí, pero OLS es sesgado con muestras finitas; se necesitan instrumentos o MLE",
      "No; Y_{t-1} y Y_t siempre están correlacionados, generando multicolinealidad perfecta",
      "Sí, y OLS es válido siempre que los errores sean Ruido Blanco",
      "No; en modelos de series temporales solo se usan variables exógenas",
    ],
  },
  {
    question: "¿Qué criterio se usa para seleccionar entre varios modelos ARIMAX candidatos?",
    options: [
      "AIC o BIC: menor valor indica mejor modelo ajustado penalizando la complejidad",
      "Solo el R²: mayor R² indica mejor modelo",
      "El valor del estadístico Durbin-Watson más cercano a 2",
      "La magnitud del error de predicción en muestra",
    ],
  },
  {
    question: "Si X_t y Y_t son ambas I(1) pero no están cointegradas, ¿qué se debe hacer?",
    options: [
      "Diferenciar ambas series antes de la regresión para evitar regresión espuria",
      "Usar directamente las series en niveles con OLS",
      "Aplicar SARIMA a ambas series por separado",
      "Incluir una tendencia determinista como variable de control",
    ],
  },
  {
    question: "¿Qué es el modelo de corrección de errores (ECM)?",
    options: [
      "Un modelo que combina cambios a corto plazo y ajuste al equilibrio a largo plazo cuando hay cointegración",
      "Un ARIMA con diferenciación de segundo orden (d=2)",
      "Un modelo que corrige los errores de medición en las variables",
      "Una regresión que minimiza el error cuadrático medio fuera de muestra",
    ],
  },
  {
    question: "¿Cuál de las siguientes es una señal de regresión espuria?",
    options: [
      "R² muy alto pero Durbin-Watson muy bajo (cerca de 0)",
      "AIC bajo y BIC alto simultáneamente",
      "Residuos con distribución normal pero varianza alta",
      "Coeficientes estadísticamente significativos con R² bajo",
    ],
  },
  {
    question: "¿Qué ventaja tiene ARIMAX para predicción sobre ARIMA puro?",
    options: [
      "Incorpora información de variables exógenas X que pueden mejorar la predicción de Y",
      "Siempre produce intervalos de predicción más estrechos",
      "No requiere que X sea estacionaria",
      "Converge en menos iteraciones que el ARIMA estándar",
    ],
  },
];

export const ud5Questions: Question[] = [
  {
    question: "¿Cuáles son los tres componentes principales del modelo Prophet?",
    options: [
      "Tendencia, Estacionalidad y Efectos de festivos/eventos especiales",
      "Media, Varianza y Autocorrelación",
      "Trend, ARMA y Diferenciación",
      "Nivel, Ciclo y Ruido",
    ],
  },
  {
    question: "¿Qué tipo de modelo es Facebook Prophet?",
    options: [
      "Modelo aditivo generalizado (GAM) diseñado para datos de negocios",
      "Un modelo ARIMA automático con selección de órdenes",
      "Un modelo de redes neuronales recurrentes para series temporales",
      "Un modelo de suavizado exponencial de Holt-Winters",
    ],
  },
  {
    question: "¿Qué son los changepoints en Prophet?",
    options: [
      "Puntos donde la tasa de crecimiento de la tendencia cambia de forma abrupta",
      "Puntos donde la estacionalidad cambia de período",
      "Valores atípicos (outliers) en la serie temporal",
      "Los picos máximos de la función de autocorrelación",
    ],
  },
  {
    question: "¿Cómo modela Prophet la tendencia no lineal?",
    options: [
      "Mediante un modelo de crecimiento logístico con capacidad de saturación (carrying capacity)",
      "Aplicando una transformación logarítmica a la serie",
      "Con una spline cúbica sobre los changepoints identificados",
      "Diferenciando la serie hasta conseguir estacionariedad",
    ],
  },
  {
    question: "¿Qué función usa Prophet para la tendencia lineal con changepoints?",
    options: [
      "Una función lineal por tramos con cambios de pendiente en los changepoints",
      "Una función exponencial con tasa de crecimiento fija",
      "Un polinomio de grado 3 ajustado por mínimos cuadrados",
      "Una función de suavizado LOESS sobre la tendencia",
    ],
  },
  {
    question: "¿Cómo modela Prophet la estacionalidad semanal y anual?",
    options: [
      "Con series de Fourier: combinación de senos y cosenos de diferentes frecuencias",
      "Con variables dummy para cada día de la semana o mes del año",
      "Con un AR(7) para la estacionalidad semanal y AR(52) para la anual",
      "Con diferenciación estacional de período 7 y 365",
    ],
  },
  {
    question: "¿Para qué tipo de series temporales está especialmente diseñado Prophet?",
    options: [
      "Series con tendencia fuerte, múltiples estacionalidades y efectos de festivos",
      "Series financieras con alta volatilidad y heterocedasticidad",
      "Series estacionarias de alta frecuencia (datos por segundo)",
      "Series univariantes sin componente estacional",
    ],
  },
  {
    question: "¿Cuál es la ventaja principal de Prophet frente a ARIMA?",
    options: [
      "Es robusto a datos faltantes, outliers y cambios de tendencia; fácil de configurar por no expertos",
      "Siempre produce predicciones más precisas que ARIMA en cualquier dominio",
      "Es más rápido de computar al no requerir estimación iterativa",
      "No necesita ningún parámetro de configuración",
    ],
  },
  {
    question: "¿Qué parámetro controla la flexibilidad del modelo Prophet para detectar changepoints?",
    options: [
      "changepoint_prior_scale: mayor valor → más changepoints detectados (más flexible)",
      "n_changepoints: número exacto de changepoints a detectar",
      "seasonality_prior_scale: controla la magnitud de la estacionalidad",
      "changepoint_range: el rango temporal donde se buscan changepoints",
    ],
  },
  {
    question: "¿Qué problema resuelve el parámetro changepoint_range en Prophet?",
    options: [
      "Limita la detección de changepoints a un porcentaje inicial de los datos (ej. 80%) para evitar overfitting al final",
      "Define el número máximo de iteraciones del algoritmo de optimización",
      "Controla la anchura de los intervalos de incertidumbre",
      "Establece el período mínimo de la estacionalidad detectable",
    ],
  },
  {
    question: "¿Cómo incorpora Prophet el efecto de festivos?",
    options: [
      "Como un indicador binario (dummy) que añade o resta una cantidad fija en las fechas indicadas",
      "Diferenciando la serie en las fechas de festivos",
      "Eliminando automáticamente los datos de fechas festivas",
      "Con un AR(1) solo activo en las semanas con festivos",
    ],
  },
  {
    question: "¿Qué representa el componente y(t) = g(t) + s(t) + h(t) + ε_t en Prophet?",
    options: [
      "g(t) = tendencia, s(t) = estacionalidad, h(t) = festivos, ε_t = error",
      "g(t) = ganancia, s(t) = sesgo, h(t) = horizonte, ε_t = error",
      "g(t) = AR, s(t) = MA, h(t) = integración, ε_t = residuo",
      "g(t) = media, s(t) = sigma, h(t) = heteroscedasticidad, ε_t = error",
    ],
  },
  {
    question: "¿Qué es la validación cruzada temporal en Prophet?",
    options: [
      "Entrenar con datos hasta un corte t₀ y evaluar predicciones para horizontes h en múltiples cortes",
      "Dividir los datos aleatoriamente en K folds y entrenar K veces",
      "Usar el 20% final de los datos como test set siempre",
      "Comparar las predicciones con las de ARIMA como baseline",
    ],
  },
  {
    question: "¿Qué métricas devuelve la función cross_validation de Prophet?",
    options: [
      "MSE, RMSE, MAE, MAPE y cobertura de intervalos por horizonte de predicción h",
      "AIC, BIC y log-verosimilitud del modelo",
      "Accuracy, Precision y Recall para clasificación de tendencias",
      "Solo RMSE para el horizonte total de predicción",
    ],
  },
  {
    question: "¿Qué significa que Prophet sea un modelo aditivo?",
    options: [
      "Los componentes (tendencia + estacionalidad + festivos) se suman para producir la predicción",
      "Los parámetros se estiman aditivamente, uno a la vez",
      "Se añade una nueva observación a la serie en cada predicción",
      "Los errores se acumulan (se suman) en cada período",
    ],
  },
  {
    question: "¿Cuándo usar el modelo de crecimiento logístico en Prophet en vez del lineal?",
    options: [
      "Cuando la serie tiene un límite natural de saturación (capacidad máxima)",
      "Siempre que la serie tenga tendencia positiva",
      "Cuando la varianza de la serie crece con el nivel",
      "Solo cuando la frecuencia de los datos es diaria",
    ],
  },
  {
    question: "¿Cómo ajusta Prophet la incertidumbre de las predicciones?",
    options: [
      "Mediante simulación de Monte Carlo de la variabilidad del changepoint y los errores observados",
      "Usando la distribución normal de los residuos del modelo",
      "Con intervalos de confianza basados en el error estándar de OLS",
      "No proporciona intervalos de incertidumbre; solo predicciones puntuales",
    ],
  },
  {
    question: "¿Qué es el seasonality_prior_scale en Prophet?",
    options: [
      "Controla la magnitud permitida de la estacionalidad; mayor valor = estacionalidad más pronunciada",
      "El número de términos de Fourier usados para modelar la estacionalidad",
      "El umbral de significación para detectar estacionalidad automáticamente",
      "El período de la estacionalidad dominante en los datos",
    ],
  },
  {
    question: "¿Cuál es una limitación conocida de Prophet?",
    options: [
      "No modela bien correlaciones a corto plazo ni la dinámica de error (ACF de residuos puede no ser cero)",
      "Solo funciona con datos de frecuencia diaria",
      "No puede manejar datos faltantes (missing values)",
      "Requiere siempre especificar manualmente los changepoints",
    ],
  },
  {
    question: "¿Qué representa el parámetro n_changepoints en Prophet?",
    options: [
      "El número de changepoints potenciales distribuidos uniformemente en el 80% inicial de la serie",
      "El número exacto de changepoints que se detectarán en la tendencia",
      "El número de períodos de estacionalidad a modelar simultáneamente",
      "El horizonte máximo de predicción en períodos",
    ],
  },
  {
    question: "¿Prophet es adecuado para series con alta frecuencia (datos por minuto o segundo)?",
    options: [
      "No idealmente; está diseñado para datos de frecuencia diaria o mayor (semanal, mensual)",
      "Sí; es especialmente eficiente con datos de alta frecuencia",
      "Solo si los datos tienen estacionalidad diaria clara",
      "Sí, pero se debe desactivar la estacionalidad semanal",
    ],
  },
  {
    question: "¿Cómo se añade estacionalidad mensual personalizada en Prophet?",
    options: [
      "Con model.add_seasonality(name='monthly', period=30.5, fourier_order=5)",
      "Pasando seasonality_mode='monthly' al constructor del modelo",
      "Añadiendo una columna 'month' al dataframe de entrenamiento",
      "Con el parámetro monthly_seasonality=True en Prophet()",
    ],
  },
  {
    question: "¿Qué es el modelo multiplicativo en Prophet (seasonality_mode='multiplicative')?",
    options: [
      "La estacionalidad se multiplica a la tendencia: y(t) = g(t) · (1 + s(t)) + h(t) + ε",
      "Los componentes se multiplican todos entre sí",
      "Cada predicción es la media geométrica de las predicciones pasadas",
      "Es equivalente al modelo aditivo pero aplicado en escala logarítmica",
    ],
  },
  {
    question: "¿Cuándo es preferible seasonality_mode='multiplicative' sobre el aditivo?",
    options: [
      "Cuando la amplitud de la estacionalidad crece proporcionalmente con el nivel de la tendencia",
      "Siempre que la varianza de la serie sea constante",
      "Cuando la serie tiene estacionalidad semanal pero no anual",
      "Solo cuando los datos tienen valores negativos",
    ],
  },
  {
    question: "¿Qué es el 'holiday effect' que Prophet puede incluir?",
    options: [
      "Un efecto diferencial en fechas específicas (Navidad, Black Friday, etc.) modelado como variable binaria",
      "Un componente estacional de frecuencia anual para capturar variaciones navideñas",
      "La diferencia entre la predicción y el valor observado en festivos",
      "Una constante que se añade a todos los períodos del año",
    ],
  },
  {
    question: "¿Con qué librería de Python se usa Prophet?",
    options: [
      "from prophet import Prophet",
      "import statsmodels.tsa.prophet as prophet",
      "from sklearn.timeseries import Prophet",
      "import fbprophet as prophet",
    ],
  },
  {
    question: "¿Qué formato debe tener el dataframe de entrada para Prophet?",
    options: [
      "Columnas 'ds' (fecha) y 'y' (valor de la serie)",
      "Columnas 'date' y 'value' estándar",
      "Un array numpy con shape (n, 2)",
      "Columnas 't' (tiempo) e 'y' (valor)",
    ],
  },
];

export const ud6Questions: Question[] = [
  {
    question: "¿Qué es el clustering de volatilidad (volatility clustering)?",
    options: [
      "Los períodos de alta volatilidad tienden a agruparse, seguidos de períodos de baja volatilidad",
      "La volatilidad permanece constante durante toda la muestra",
      "La volatilidad solo cambia en los cambios de tendencia",
      "Los retornos tienen distribución normal con varianza constante",
    ],
  },
  {
    question: "¿Qué es el modelo ARCH(q) propuesto por Engle (1982)?",
    options: [
      "Un modelo donde la varianza condicional depende de los q cuadrados de errores pasados",
      "Un modelo AR donde la varianza es condicional al nivel de la serie",
      "Un modelo ARIMA con componente heteroscedástico en los errores",
      "Un modelo de componentes principales para la volatilidad",
    ],
  },
  {
    question: "¿Cuál es la ecuación de la varianza condicional del modelo ARCH(1)?",
    options: [
      "σ²_t = α₀ + α₁ε²_{t-1}",
      "σ²_t = α₀ + α₁σ²_{t-1}",
      "σ²_t = α₀ε²_{t-1} + α₁σ²_{t-1}",
      "σ²_t = α₀ + α₁Y²_{t-1}",
    ],
  },
  {
    question: "¿Qué generalización del ARCH propusieron Bollerslev en 1986?",
    options: [
      "GARCH(p,q): la varianza condicional depende de q errores al cuadrado y p varianzas condicionales pasadas",
      "IGARCH: un ARCH integrado con raíz unitaria en la varianza",
      "EGARCH: un modelo ARCH con efecto asimétrico (leverage effect)",
      "TGARCH: modelo de umbral con cambio de régimen en la varianza",
    ],
  },
  {
    question: "¿Cuál es la ecuación de la varianza condicional del modelo GARCH(1,1)?",
    options: [
      "σ²_t = ω + α·ε²_{t-1} + β·σ²_{t-1}",
      "σ²_t = ω + α·σ²_{t-1} + β·ε²_{t-1}",
      "σ²_t = ω + α·ε_{t-1} + β·σ_{t-1}",
      "σ²_t = ω·(α·ε²_{t-1}) + β·σ²_{t-1}",
    ],
  },
  {
    question: "En GARCH(1,1), ¿qué condición deben cumplir α y β para que la varianza incondicional sea finita?",
    options: [
      "α + β < 1",
      "α + β = 1 (IGARCH)",
      "α > β",
      "α < 0.5 y β < 0.5 independientemente",
    ],
  },
  {
    question: "¿Cómo se calcula la varianza incondicional (de largo plazo) en GARCH(1,1)?",
    options: [
      "σ² = ω / (1 − α − β)",
      "σ² = ω · (1 + α + β)",
      "σ² = ω / (α + β)",
      "σ² = ω + α + β",
    ],
  },
  {
    question: "¿Qué representa el parámetro β en un GARCH(1,1)?",
    options: [
      "La persistencia de la volatilidad: cuánto persiste el nivel de varianza del período anterior",
      "La sensibilidad de la varianza a los shocks de retorno recientes",
      "La varianza incondicional de largo plazo",
      "El coeficiente del componente AR del retorno",
    ],
  },
  {
    question: "¿Qué representa el parámetro α en un GARCH(1,1)?",
    options: [
      "La reacción de la varianza a noticias recientes (α·ε²_{t-1})",
      "La persistencia de la varianza del período anterior",
      "La varianza incondicional normalizada",
      "El umbral de cambio de régimen de volatilidad",
    ],
  },
  {
    question: "¿Cómo se detecta presencia de efectos ARCH en una serie de retornos?",
    options: [
      "Con el test LM de Engle o examinando la ACF de los residuos al cuadrado",
      "Con el test ADF sobre la serie de retornos originales",
      "Observando si la ACF de los retornos es significativa en lag 1",
      "Con el test de Ljung-Box sobre los retornos (no los cuadrados)",
    ],
  },
  {
    question: "¿Qué distribución de los errores se suele usar en modelos GARCH para datos financieros?",
    options: [
      "t de Student (heavy tails) o GED, en lugar de la normal estándar",
      "Siempre la distribución normal estándar",
      "Distribución uniforme por robustez",
      "Distribución log-normal para retornos positivos",
    ],
  },
  {
    question: "¿Qué es el modelo EGARCH?",
    options: [
      "GARCH exponencial que captura el efecto asimétrico (leverage): malas noticias aumentan más la vol que las buenas",
      "Un GARCH con errores exponencialmente distribuidos",
      "Un GARCH en el que la varianza crece exponencialmente con el tiempo",
      "Un GARCH extendido con componente exógena X",
    ],
  },
  {
    question: "El 'leverage effect' en series financieras significa...",
    options: [
      "Las caídas del precio (retornos negativos) aumentan la volatilidad más que las subidas del mismo tamaño",
      "La volatilidad se multiplica por un factor de apalancamiento",
      "Los retornos positivos tienen mayor volatilidad que los negativos",
      "La correlación entre volatilidad y retorno es siempre positiva",
    ],
  },
  {
    question: "Si α + β = 1 en GARCH(1,1), el modelo se llama...",
    options: [
      "IGARCH (Integrated GARCH): la varianza tiene raíz unitaria",
      "EGARCH: modelo exponencial",
      "ARCH puro (β = 0)",
      "GARCH-M: GARCH en media",
    ],
  },
  {
    question: "¿Qué es el modelo GJR-GARCH (o TGARCH)?",
    options: [
      "Un GARCH que añade un término asimétrico para capturar diferente impacto de shocks positivos y negativos",
      "Un GARCH con tres parámetros AR para la varianza",
      "Un GARCH de régimen de umbral basado en el nivel del retorno",
      "Una generalización del ARCH con retardos de Jacobi",
    ],
  },
  {
    question: "¿Cómo se estiman los parámetros de un modelo GARCH?",
    options: [
      "Por Máxima Verosimilitud (MLE) maximizando la log-verosimilitud condicional",
      "Por OLS sobre los cuadrados de los residuos",
      "Por el método de momentos generalizado (GMM)",
      "Por mínimos cuadrados no lineales sobre la varianza muestral",
    ],
  },
  {
    question: "¿En qué librería de Python se puede ajustar un modelo GARCH?",
    options: [
      "arch (de Kevin Sheppard): arch_model(returns, vol='Garch', p=1, q=1)",
      "statsmodels.tsa.garch",
      "sklearn.garch",
      "scipy.stats.garch_model",
    ],
  },
  {
    question: "¿Qué se usa para diagnosticar un modelo GARCH ajustado?",
    options: [
      "Examinar la ACF de los residuos estandarizados y sus cuadrados: ambas deben ser Ruido Blanco",
      "Solo el test ADF sobre los residuos estandarizados",
      "Verificar que todos los parámetros son positivos",
      "Comparar el RMSE del modelo GARCH con el de ARIMA",
    ],
  },
  {
    question: "¿Cuál es la interpretación financiera de la predicción de volatilidad con GARCH?",
    options: [
      "Proporciona la volatilidad condicional futura usada en pricing de opciones, VaR y gestión de riesgo",
      "Predice el nivel del precio del activo en el siguiente período",
      "Estima la correlación entre activos para construir carteras",
      "Determina si el activo subirá o bajará en el siguiente período",
    ],
  },
  {
    question: "¿Por qué los modelos ARCH/GARCH son importantes para datos financieros?",
    options: [
      "Capturan el clustering de volatilidad y las colas pesadas observadas en retornos financieros",
      "Son los únicos modelos que pueden predecir el precio de activos a largo plazo",
      "Eliminan la autocorrelación de los retornos financieros",
      "Permiten usar OLS en series financieras no estacionarias",
    ],
  },
  {
    question: "En un GARCH(1,1), si α es pequeño y β es grande (cerca de 1), la volatilidad...",
    options: [
      "Es muy persistente: un shock tarda mucho en disiparse",
      "Reacciona rápidamente a nuevos shocks pero no persiste",
      "Es casi constante e igual a la varianza incondicional",
      "Aumenta indefinidamente hasta divergir",
    ],
  },
  {
    question: "¿Qué es el GARCH-M (GARCH in Mean)?",
    options: [
      "Un modelo donde la varianza condicional aparece también en la ecuación de la media del retorno",
      "Un GARCH ajustado solo para datos mensuales (M=monthly)",
      "Un modelo GARCH multivariante para varias series simultáneas",
      "Una variante del GARCH con 'M' parámetros adicionales",
    ],
  },
  {
    question: "¿Cuántos parámetros tiene el modelo GARCH(1,1) básico?",
    options: [
      "3 parámetros: ω, α, β (más la varianza inicial σ²₀)",
      "2 parámetros: α y β",
      "4 parámetros: ω, α₁, α₂, β",
      "5 parámetros incluyendo la media del retorno",
    ],
  },
  {
    question: "¿Qué significa que los retornos financieros tengan 'colas pesadas' (heavy tails)?",
    options: [
      "La probabilidad de eventos extremos (grandes subidas o caídas) es mayor de lo que predice la normal",
      "Los retornos tienen una distribución asimétrica positiva",
      "La media de los retornos es mayor que la mediana",
      "La varianza de los retornos crece con el tiempo",
    ],
  },
  {
    question: "¿Cuál fue el dato de EurUSD analizado en el caso práctico de GARCH en el temario?",
    options: [
      "La serie de retornos del tipo de cambio Euro/USD, ilustrando el clustering de volatilidad",
      "Los precios del barril de petróleo Brent en euros",
      "El índice bursátil EUROSTOXX 50 diario",
      "Los tipos de interés del Banco Central Europeo mensuales",
    ],
  },
  {
    question: "Para elegir entre GARCH(1,1) y GARCH(2,1), ¿qué criterio se usa?",
    options: [
      "AIC o BIC: se elige el modelo con menor criterio de información",
      "Se elige siempre el modelo más parsimonioso (GARCH(1,1)) sin comparar",
      "Se usa el test de razón de verosimilitud (LR test)",
      "Se compara el RMSE de la varianza condicional estimada",
    ],
  },
];

export const ud7Questions: Question[] = [
  {
    question: "¿Qué es un perceptrón simple?",
    options: [
      "Un clasificador binario lineal que combina linealmente las entradas y aplica una función de activación",
      "Una red neuronal con múltiples capas ocultas",
      "Un modelo de regresión logística con regularización L2",
      "Una unidad de memoria en redes LSTM",
    ],
  },
  {
    question: "¿Qué es ADALINE y en qué se diferencia del perceptrón?",
    options: [
      "ADALINE usa una función de activación lineal y minimiza el MSE; el perceptrón usa activación escalón y minimiza el error de clasificación",
      "ADALINE tiene múltiples capas; el perceptrón solo tiene una",
      "ADALINE es una red recurrente; el perceptrón es una red feed-forward",
      "Son equivalentes; solo difieren en el nombre",
    ],
  },
  {
    question: "¿Cuál es la función de activación ReLU?",
    options: [
      "f(x) = max(0, x): devuelve x si es positivo, 0 si es negativo",
      "f(x) = 1 / (1 + e^{-x}): función sigmoide",
      "f(x) = tanh(x): tangente hiperbólica",
      "f(x) = sign(x): función escalón",
    ],
  },
  {
    question: "¿Cuál es la ventaja de ReLU frente a la sigmoide para capas ocultas profundas?",
    options: [
      "Evita el problema del gradiente que desaparece (vanishing gradient) en redes profundas",
      "Produce salidas acotadas entre 0 y 1, útil para clasificación multiclase",
      "Es diferenciable en todos los puntos, incluyendo x = 0",
      "Garantiza convergencia del gradiente descendente en cualquier arquitectura",
    ],
  },
  {
    question: "¿Qué es el algoritmo de backpropagation?",
    options: [
      "Calcula los gradientes de la función de pérdida respecto a los pesos mediante la regla de la cadena, propagándolos desde la salida hacia la entrada",
      "Ajusta los pesos hacia adelante (forward) capa a capa para minimizar el error",
      "Genera las predicciones propagando la entrada hacia la salida de la red",
      "Inicializa aleatoriamente los pesos de la red antes del entrenamiento",
    ],
  },
  {
    question: "¿Qué es el forward pass en una red neuronal?",
    options: [
      "Calcular la predicción de la red propagando la entrada a través de todas las capas hasta la salida",
      "Actualizar los pesos usando el gradiente calculado en backprop",
      "Calcular los gradientes respecto a los pesos de cada capa",
      "Inicializar los pesos con valores aleatorios pequeños",
    ],
  },
  {
    question: "¿Qué es el optimizador Adam?",
    options: [
      "Un algoritmo de gradiente estocástico con momento adaptativo para cada parámetro (combina RMSprop y momentum)",
      "El gradiente descendente estocástico básico (SGD) sin modificaciones",
      "Un método de segundo orden (Newton) para minimizar la función de pérdida",
      "Un optimizador específico para redes LSTM",
    ],
  },
  {
    question: "¿Qué es el dropout en redes neuronales?",
    options: [
      "Una técnica de regularización que desactiva aleatoriamente un porcentaje de neuronas durante el entrenamiento",
      "La función de activación que 'deja caer' neuronas con activación cero",
      "El proceso de eliminar las capas con peor rendimiento",
      "Una técnica para inicializar pesos cercanos a cero",
    ],
  },
  {
    question: "¿Qué es el batch normalization?",
    options: [
      "Normalizar las activaciones de una capa antes de pasarlas a la siguiente para acelerar y estabilizar el entrenamiento",
      "Dividir los datos en mini-batches para el gradiente estocástico",
      "Normalizar los datos de entrada al comienzo de la red",
      "Normalizar los pesos de la red para evitar gradientes explosivos",
    ],
  },
  {
    question: "¿Cuál es la función de pérdida typical para regresión en redes neuronales?",
    options: [
      "MSE (Mean Squared Error): L = (1/n) Σ(y_i − ŷ_i)²",
      "Binary Cross-Entropy: L = −Σ[y log(ŷ) + (1−y)log(1−ŷ)]",
      "Categorical Cross-Entropy para múltiples clases",
      "Hinge Loss: L = max(0, 1 − y·ŷ)",
    ],
  },
  {
    question: "¿Qué es el problema del vanishing gradient?",
    options: [
      "Los gradientes se vuelven muy pequeños al propagarse hacia capas iniciales en redes profundas, haciendo que los pesos no se actualicen",
      "Los gradientes explotan y se vuelven muy grandes, causando inestabilidad",
      "El optimizador pierde el gradiente cuando la tasa de aprendizaje es muy alta",
      "Los gradientes oscilan indefinidamente sin converger",
    ],
  },
  {
    question: "¿Qué es una red LSTM (Long Short-Term Memory)?",
    options: [
      "Una red neuronal recurrente con puertas (gates) que permite capturar dependencias a largo plazo en secuencias",
      "Una red feed-forward con capa de memoria estática",
      "Una red convolucional para secuencias de texto",
      "Una variante de perceptrón multicapa con conexiones saltadas",
    ],
  },
  {
    question: "¿Cuáles son las tres puertas (gates) de una celda LSTM?",
    options: [
      "Forget gate (olvido), Input gate (entrada) y Output gate (salida)",
      "Read gate, Write gate y Reset gate",
      "Past gate, Present gate y Future gate",
      "AR gate, MA gate y Integration gate",
    ],
  },
  {
    question: "¿Para qué es especialmente adecuada una red LSTM?",
    options: [
      "Modelar secuencias con dependencias a largo plazo como texto, audio y series temporales",
      "Clasificación de imágenes con alta resolución",
      "Regresión lineal con muchas variables independientes",
      "Clustering no supervisado de datos tabulares",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre una capa Dense y una capa LSTM en Keras?",
    options: [
      "Dense es una capa completamente conectada sin memoria; LSTM es recurrente y mantiene estado interno",
      "Dense tiene función de activación; LSTM no",
      "Dense procesa secuencias; LSTM procesa datos tabulares",
      "No hay diferencia funcional; solo difieren en el número de parámetros",
    ],
  },
  {
    question: "¿Qué hace model.compile() en Keras?",
    options: [
      "Configura el modelo con el optimizador, la función de pérdida y las métricas de evaluación",
      "Construye la arquitectura de la red añadiendo capas",
      "Entrena el modelo con los datos de entrenamiento",
      "Genera predicciones con los datos de test",
    ],
  },
  {
    question: "¿Qué hace model.fit() en Keras?",
    options: [
      "Entrena el modelo ajustando los pesos mediante backpropagation durante el número de épocas especificado",
      "Compila el modelo con el optimizador y la función de pérdida",
      "Evalúa el modelo en el conjunto de test",
      "Genera predicciones a partir de los datos de entrada",
    ],
  },
  {
    question: "¿Qué es el overfitting en redes neuronales?",
    options: [
      "El modelo aprende el ruido de los datos de entrenamiento y generaliza mal en datos nuevos (alta varianza)",
      "El modelo es demasiado simple para capturar los patrones de los datos (alto sesgo)",
      "El modelo converge a un mínimo local de la función de pérdida",
      "Los pesos crecen indefinidamente durante el entrenamiento",
    ],
  },
  {
    question: "¿Qué técnica reduce el overfitting añadiendo una penalización a los pesos grandes?",
    options: [
      "Regularización L1 (Lasso) o L2 (Ridge) sobre los pesos",
      "Aumentar el número de épocas de entrenamiento",
      "Reducir el tamaño del batch",
      "Usar la función de activación ReLU en lugar de sigmoide",
    ],
  },
  {
    question: "¿Qué es el early stopping?",
    options: [
      "Detener el entrenamiento cuando la pérdida en validación deja de mejorar, evitando overfitting",
      "Detener el entrenamiento al alcanzar un número fijo de épocas",
      "Reducir la tasa de aprendizaje cuando el loss no mejora",
      "Eliminar las neuronas con pesos cercanos a cero",
    ],
  },
  {
    question: "¿Qué es una red neuronal convolucional (CNN)?",
    options: [
      "Una red que aplica filtros convolucionales para detectar patrones locales, especialmente en imágenes",
      "Una red recurrente que convoluciona los estados ocultos con las entradas",
      "Una red completamente conectada (Dense) con función de activación convolucional",
      "Una red que combina capas LSTM con capas de pooling",
    ],
  },
  {
    question: "¿Qué función de activación se usa en la capa de salida para clasificación binaria?",
    options: [
      "Sigmoide: devuelve probabilidad entre 0 y 1",
      "ReLU: devuelve valores positivos",
      "Softmax: devuelve distribución sobre múltiples clases",
      "Lineal (ninguna): devuelve el valor sin transformar",
    ],
  },
  {
    question: "¿Qué función de activación se usa en la capa de salida para regresión?",
    options: [
      "Lineal (sin activación): la salida no está acotada",
      "Sigmoide: para producir valores entre 0 y 1",
      "ReLU: para producir valores no negativos",
      "Softmax: para normalizar la salida",
    ],
  },
  {
    question: "¿Qué librería de Python es backend de Keras para cálculo tensorial?",
    options: [
      "TensorFlow (o alternativamente PyTorch/JAX)",
      "NumPy directamente",
      "Scikit-learn",
      "SciPy",
    ],
  },
  {
    question: "¿Cuántas épocas de entrenamiento se necesitan típicamente?",
    options: [
      "Depende del problema; se monitoriza con early stopping en el conjunto de validación",
      "Siempre 100 épocas como estándar de la industria",
      "Solo 1 época si el batch size es suficientemente grande",
      "Exactamente el doble del número de capas de la red",
    ],
  },
  {
    question: "En el contexto de series temporales, ¿qué ventana se usa como entrada a una LSTM?",
    options: [
      "Una secuencia de T pasos pasados para predecir el siguiente valor (o los siguientes h valores)",
      "Solo el último valor observado",
      "Toda la historia disponible de la serie",
      "Una ventana aleatoria de longitud variable",
    ],
  },
];

export const ud8Questions: Question[] = [
  {
    question: "¿Cuáles son los tipos principales de sistemas recomendadores?",
    options: [
      "Popular-Based, Content-Based, Collaborative Filtering y Hybrid",
      "Supervisado, No Supervisado, Semi-Supervisado y Refuerzo",
      "Regresión, Clasificación, Clustering y Asociación",
      "Rating, Implicit, Explicit y Contextual",
    ],
  },
  {
    question: "¿Qué es el fenómeno Long Tail en sistemas recomendadores?",
    options: [
      "La mayoría de usuarios consumen pocos ítems populares, pero existe una larga cola de ítems nicho con demanda agregada importante",
      "La función de distribución de ratings tiene una cola larga hacia la derecha",
      "Los usuarios más activos generan exponencialmente más interacciones que los pasivos",
      "La precisión del recomendador cae rápidamente para usuarios con poco historial",
    ],
  },
  {
    question: "¿Qué es el filtrado colaborativo (Collaborative Filtering)?",
    options: [
      "Recomienda ítems basándose en las preferencias de usuarios similares ('usuarios que compraron X también compraron Y')",
      "Recomienda ítems similares al perfil de contenido del usuario",
      "Recomienda siempre los ítems más populares entre todos los usuarios",
      "Combina señales de contenido y de comportamiento de usuarios",
    ],
  },
  {
    question: "¿Qué es el filtrado basado en contenido (Content-Based Filtering)?",
    options: [
      "Recomienda ítems con características similares a los que el usuario ha consumido/valorado positivamente",
      "Recomienda ítems que otros usuarios similares han consumido",
      "Filtra el contenido inapropiado antes de hacer recomendaciones",
      "Analiza el contenido textual de las reseñas del usuario",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre feedback explícito e implícito?",
    options: [
      "Explícito: ratings directos (1-5 estrellas); Implícito: comportamiento inferido (clics, tiempo de visualización)",
      "Explícito: comportamiento del usuario; Implícito: características del ítem",
      "Explícito: datos de redes sociales; Implícito: datos de compra",
      "No hay diferencia práctica para el algoritmo de recomendación",
    ],
  },
  {
    question: "¿Qué es la Rating Matrix (matriz de valoraciones)?",
    options: [
      "Una matriz usuarios × ítems donde cada entrada R_{ui} es el rating del usuario u al ítem i (muy dispersa/sparse)",
      "Una matriz de correlaciones entre todos los pares de ítems",
      "Una matriz de similaridades entre todos los pares de usuarios",
      "Una matriz de covarianzas del comportamiento de compra",
    ],
  },
  {
    question: "¿Qué problema típico tienen las matrices de ratings?",
    options: [
      "Son muy dispersas (sparse): la mayoría de usuarios no ha valorado la mayoría de ítems",
      "Son simétricas: si el usuario A valoró el ítem X, el ítem X valoró al usuario A",
      "Tienen valores faltantes solo en la diagonal principal",
      "Tienen demasiados datos; el problema es la complejidad computacional",
    ],
  },
  {
    question: "¿Qué es la Factorización de Matrices (Matrix Factorization) en recomendadores?",
    options: [
      "Descomponer R ≈ P·Q^T donde P (usuarios×k) y Q (ítems×k) representan factores latentes",
      "Factorizar la matriz de correlaciones en autovectores y autovalores",
      "Descomponer la serie temporal de interacciones en componentes de tendencia y estacionalidad",
      "Separar el feedback explícito del implícito en dos matrices distintas",
    ],
  },
  {
    question: "¿Qué es el problema del arranque en frío (Cold Start)?",
    options: [
      "No se pueden hacer buenas recomendaciones a usuarios nuevos o para ítems nuevos sin historial",
      "El algoritmo tarda mucho en arrancar cuando la base de datos es grande",
      "Los primeros ítems recomendados son siempre los más populares",
      "El modelo pierde precisión si no se re-entrena frecuentemente",
    ],
  },
  {
    question: "¿Cuál es el sistema recomendador más simple?",
    options: [
      "Popular-Based: recomienda los ítems con mayor número de interacciones/ratings globales",
      "Content-Based: analiza el contenido del perfil del usuario",
      "Collaborative Filtering: usa la similitud entre usuarios",
      "Hybrid: combina todas las señales disponibles",
    ],
  },
  {
    question: "¿Cómo se mide la similitud entre usuarios en el collaborative filtering basado en memoria?",
    options: [
      "Coseno de similitud o correlación de Pearson sobre los ratings comunes",
      "Distancia euclidiana entre los vectores de características del ítem",
      "Diferencia absoluta entre los ratings medios de cada usuario",
      "Test de hipótesis sobre la igualdad de distribuciones de ratings",
    ],
  },
  {
    question: "¿Qué es el User-Based Collaborative Filtering?",
    options: [
      "Encontrar usuarios similares al usuario activo y recomendar lo que ellos han valorado positivamente",
      "Recomendar ítems similares a los que el usuario activo ha valorado positivamente",
      "Usar el perfil demográfico del usuario para filtrar ítems relevantes",
      "Filtrar ítems basándose en las valoraciones promedio de todos los usuarios",
    ],
  },
  {
    question: "¿Qué es el Item-Based Collaborative Filtering?",
    options: [
      "Encontrar ítems similares a los que el usuario ha consumido y recomendarlos",
      "Filtrar ítems basándose en sus características de contenido",
      "Usar la popularidad del ítem como señal principal de recomendación",
      "Recomendar a usuarios similares al que valoró el ítem",
    ],
  },
  {
    question: "¿Qué métricas se usan para evaluar la calidad de un sistema recomendador?",
    options: [
      "RMSE/MAE (predicción de ratings), Precision@K, Recall@K, NDCG y cobertura",
      "Accuracy, F1 y AUC-ROC solo",
      "Solo RMSE sobre los ratings del conjunto de test",
      "Tiempo de respuesta y uso de memoria del sistema",
    ],
  },
  {
    question: "¿Qué es Precision@K en sistemas recomendadores?",
    options: [
      "La fracción de ítems relevantes entre los K primeros recomendados",
      "La fracción de ítems relevantes totales que aparecen en la lista de K recomendaciones",
      "El RMSE calculado solo sobre los K ítems con mayor rating real",
      "La correlación entre el ranking predicho y el real para los K primeros",
    ],
  },
  {
    question: "¿Qué es Recall@K en sistemas recomendadores?",
    options: [
      "La fracción del total de ítems relevantes que aparecen en los K primeros recomendados",
      "La fracción de ítems relevantes entre los K primeros recomendados",
      "El número de ítems relevantes encontrados antes del K-ésimo recomendado",
      "La media de los ratings de los K ítems recomendados",
    ],
  },
  {
    question: "¿Qué algoritmo de factorización de matrices usa gradiente descendente estocástico?",
    options: [
      "SVD++ o ALS (Alternating Least Squares) son los más comunes en producción",
      "SVD estándar de álgebra lineal",
      "PCA (Principal Component Analysis)",
      "NMF (Non-negative Matrix Factorization) siempre con SGD",
    ],
  },
  {
    question: "¿Cuál es la ventaja del Collaborative Filtering sobre Content-Based?",
    options: [
      "Descubre preferencias no obvias basadas en comportamiento colectivo; no necesita describir el contenido de los ítems",
      "Funciona mejor para usuarios nuevos sin historial",
      "Es más interpretable: el usuario entiende por qué se le recomienda cada ítem",
      "Requiere menos datos de entrenamiento",
    ],
  },
  {
    question: "¿Cuál es la ventaja del Content-Based sobre el Collaborative Filtering?",
    options: [
      "No sufre el problema de cold start para ítems nuevos; puede recomendar si se conoce el contenido",
      "Captura preferencias implícitas del comportamiento colectivo",
      "Escala mejor con millones de usuarios simultáneos",
      "No necesita ningún metadato del ítem",
    ],
  },
  {
    question: "¿Qué es un sistema híbrido (Hybrid Recommender)?",
    options: [
      "Combina content-based y collaborative filtering para aprovechar las ventajas de ambos y minimizar sus debilidades",
      "Un sistema que combina recomendaciones de múltiples plataformas externas",
      "Un recomendador que alterna entre popular-based y content-based según el contexto",
      "Un modelo de ensemble de varios algoritmos de Machine Learning",
    ],
  },
  {
    question: "¿Qué es el problema de la burbuja de filtro (filter bubble) en recomendadores?",
    options: [
      "Los usuarios reciben solo contenido similar a lo que ya consumen, reduciendo la diversidad y la serendipia",
      "El modelo filtra automáticamente el spam de las recomendaciones",
      "La burbuja especulativa causada por recomendadores de activos financieros",
      "Un error en el cálculo de la similitud que infla artificialmente las métricas",
    ],
  },
  {
    question: "¿Qué es NDCG (Normalized Discounted Cumulative Gain)?",
    options: [
      "Una métrica de ranking que penaliza más los ítems relevantes ubicados en posiciones inferiores de la lista",
      "La media de los ratings de los ítems recomendados normalizada por el número máximo posible",
      "Un índice de cobertura que mide qué porcentaje del catálogo se recomienda",
      "La correlación de Spearman entre el ranking predicho y el real",
    ],
  },
  {
    question: "¿Qué representan los factores latentes k en la factorización de matrices?",
    options: [
      "Dimensiones ocultas que capturan características no observadas de usuarios e ítems (ej. géneros implícitos)",
      "Los k vecinos más cercanos al usuario activo",
      "Los k ítems más populares del catálogo",
      "El número de épocas de entrenamiento del algoritmo",
    ],
  },
  {
    question: "¿Cuál es el trade-off entre precisión y diversidad en los recomendadores?",
    options: [
      "Maximizar la precisión (recomendar lo más probable de gustar) puede reducir la diversidad y la serendipia",
      "Mayor diversidad siempre implica mayor precisión",
      "La precisión y diversidad son independientes entre sí",
      "El trade-off solo existe en collaborative filtering, no en content-based",
    ],
  },
  {
    question: "¿Qué son las entradas del sistema recomendador según el temario?",
    options: [
      "Rating Matrix (explícita/implícita), metadatos del ítem y perfil del usuario",
      "Solo los ratings explícitos del usuario (1-5 estrellas)",
      "Únicamente el historial de compras del usuario",
      "Los logs de clics del servidor web exclusivamente",
    ],
  },
];

export const ud9Questions: Question[] = [
  {
    question: "¿Qué es el Value at Risk (VaR)?",
    options: [
      "La máxima pérdida esperada de una cartera en un horizonte temporal dado con un nivel de confianza determinado",
      "La pérdida media esperada en escenarios extremos más allá del umbral de confianza",
      "La volatilidad máxima histórica de un activo financiero",
      "El coste de cobertura (hedging) de una posición financiera",
    ],
  },
  {
    question: "Si el VaR al 99% a 1 día es de 1 millón €, significa que...",
    options: [
      "Con probabilidad 99% la pérdida en 1 día no superará 1 millón €; solo en el 1% de los días podría superarse",
      "La pérdida esperada en 1 día es de 1 millón € como promedio",
      "La pérdida máxima posible en 1 día es exactamente 1 millón €",
      "En el 1% de los mejores días se gana al menos 1 millón €",
    ],
  },
  {
    question: "¿Cuáles son los tres métodos principales para calcular el VaR?",
    options: [
      "Paramétrico (varianza-covarianza), Simulación Histórica y Simulación de Monte Carlo",
      "ARIMA, GARCH y Suavizado Exponencial",
      "OLS, MLE y Método de Momentos",
      "Bootstrap, Jackknife y Cross-Validation",
    ],
  },
  {
    question: "¿Qué supone el método paramétrico (varianza-covarianza) para calcular el VaR?",
    options: [
      "Los retornos siguen una distribución normal con media μ y volatilidad σ estimadas",
      "Los retornos tienen distribución t de Student con colas pesadas",
      "Los retornos futuros se distribuyen como los retornos históricos observados",
      "La volatilidad es constante e igual a la desviación estándar histórica total",
    ],
  },
  {
    question: "¿Cuál es la fórmula del VaR paramétrico al nivel de confianza (1-α)?",
    options: [
      "VaR = −(μ − z_α · σ) · √T, donde z_α es el cuantil de la distribución normal",
      "VaR = μ + z_α · σ · T",
      "VaR = σ · T^{1/2} · z_{1-α}",
      "VaR = z_α · σ / √T",
    ],
  },
  {
    question: "¿Qué es el Expected Shortfall (ES), también llamado CVaR?",
    options: [
      "La pérdida media esperada en los escenarios que superan el umbral VaR (promedio de la cola de pérdidas)",
      "La pérdida máxima posible en condiciones de estrés extremo",
      "La varianza de las pérdidas por encima del VaR",
      "La diferencia entre el VaR al 95% y el VaR al 99%",
    ],
  },
  {
    question: "¿Por qué el ES es considerado una medida de riesgo más coherente que el VaR?",
    options: [
      "El ES es subadictivo (ES(A+B) ≤ ES(A) + ES(B)); el VaR no siempre cumple esta propiedad",
      "El ES siempre produce un valor más bajo que el VaR, siendo más conservador",
      "El ES no requiere supuestos distribucionales",
      "El ES es más fácil de calcular que el VaR",
    ],
  },
  {
    question: "¿Qué es el backtesting del VaR?",
    options: [
      "Comparar las pérdidas realmente observadas con las predichas por el VaR para verificar la validez del modelo",
      "Calibrar el modelo de VaR usando solo datos históricos sin validación futura",
      "Calcular el VaR para un período pasado usando datos disponibles en ese momento",
      "Comparar diferentes métodos de cálculo de VaR entre sí",
    ],
  },
  {
    question: "¿Qué test estadístico se usa comúnmente para el backtesting del VaR?",
    options: [
      "Test de Kupiec (unconditional coverage) y Christoffersen (conditional coverage)",
      "Test de Dickey-Fuller Aumentado",
      "Test de Ljung-Box sobre los residuos del modelo de VaR",
      "Test F de Fisher sobre la igualdad de varianzas",
    ],
  },
  {
    question: "¿Qué es EWMA (Exponentially Weighted Moving Average) en el contexto del VaR?",
    options: [
      "Un estimador de volatilidad que da más peso a las observaciones recientes con factor de decaimiento λ",
      "Una media móvil simple de los retornos para estimar la tendencia",
      "Un modelo de suavizado exponencial para la predicción del nivel del activo",
      "Una técnica para eliminar la estacionalidad de las series de volatilidad",
    ],
  },
  {
    question: "En EWMA, ¿cómo se actualiza la varianza condicional?",
    options: [
      "σ²_t = λ · σ²_{t-1} + (1-λ) · r²_{t-1}, donde λ ∈ (0,1) es el factor de decaimiento",
      "σ²_t = (σ²_{t-1} + r²_{t-1}) / 2",
      "σ²_t = λ · r²_{t-1} + (1-λ) · μ",
      "σ²_t = σ²_{t-1} · (1 + λ · r_{t-1})",
    ],
  },
  {
    question: "¿Cuál es el valor de λ recomendado por RiskMetrics (J.P. Morgan) para datos diarios?",
    options: [
      "λ = 0.94",
      "λ = 0.5",
      "λ = 0.99",
      "λ = 0.1",
    ],
  },
  {
    question: "¿Qué ventaja tiene usar GARCH en vez de EWMA para el VaR?",
    options: [
      "GARCH tiene reversión a la media de largo plazo (ω > 0); EWMA no",
      "GARCH es más sencillo de implementar y requiere menos parámetros",
      "EWMA siempre sobreestima la volatilidad en períodos tranquilos",
      "GARCH no requiere suponer distribución normal para los retornos",
    ],
  },
  {
    question: "¿Cuáles son las principales categorías de riesgo en Risk Management?",
    options: [
      "Riesgo de mercado, riesgo de crédito, riesgo de liquidez y riesgo operacional",
      "Riesgo sistemático, idiosincrático, macroeconómico y microeconómico",
      "Riesgo de tipo de interés, de tipo de cambio, de precio y de commodities",
      "Riesgo estadístico, de modelo, de datos y de implementación",
    ],
  },
  {
    question: "¿Qué supone el método de simulación histórica para el VaR?",
    options: [
      "Los retornos futuros seguirán la misma distribución que los retornos históricos observados (sin supuesto distribucional paramétrico)",
      "Los retornos siguen una distribución normal estándar",
      "La volatilidad es constante e igual a la desviación estándar histórica",
      "Los retornos están correlacionados con un factor de mercado único",
    ],
  },
  {
    question: "¿Cuál es la principal limitación de la simulación histórica para el VaR?",
    options: [
      "Solo captura los riesgos presentes en la ventana histórica; no puede generar escenarios peores que los observados",
      "Requiere suponer distribución normal de los retornos",
      "Es computacionalmente muy costosa para carteras grandes",
      "No permite calcular el VaR para horizontes superiores a 1 día",
    ],
  },
  {
    question: "¿Cómo se calcula el VaR con Simulación de Monte Carlo?",
    options: [
      "Simular miles de escenarios de retornos bajo el modelo asumido y obtener el percentil α de las pérdidas simuladas",
      "Ajustar una distribución normal a los retornos históricos y calcular el percentil analíticamente",
      "Ordenar los retornos históricos de peor a mejor y seleccionar el percentil α",
      "Calcular la media y desviación estándar de los retornos y aplicar la fórmula paramétrica",
    ],
  },
  {
    question: "¿Qué es el scaling del VaR de 1 día a T días (regla de la raíz cuadrada)?",
    options: [
      "VaR_T = VaR_1 · √T (válido bajo supuesto de retornos iid y normales)",
      "VaR_T = VaR_1 · T",
      "VaR_T = VaR_1 / √T",
      "VaR_T = VaR_1 · T²",
    ],
  },
  {
    question: "¿Cuándo NO es válida la regla de la raíz cuadrada para escalar el VaR?",
    options: [
      "Cuando los retornos tienen autocorrelación o la volatilidad es heteroscedástica (GARCH)",
      "Cuando el nivel de confianza es del 99% en lugar del 95%",
      "Cuando la cartera tiene más de 10 activos",
      "Solo cuando se usa EWMA para estimar la volatilidad",
    ],
  },
  {
    question: "¿Para qué se usa el marco regulatorio de Basilea (I, II, III) en relación al VaR?",
    options: [
      "Establece el VaR al 99% a 10 días como medida de riesgo de mercado para calcular el capital regulatorio",
      "Define el método de Monte Carlo como único método aceptado para el VaR",
      "Prohíbe el uso del Expected Shortfall para fines regulatorios",
      "Fija el nivel de confianza al 95% para todos los cálculos de VaR",
    ],
  },
  {
    question: "¿Qué relación hay entre el VaR y el ES para una distribución normal?",
    options: [
      "ES al (1-α)% = VaR al (1-α)% + φ(z_α)/(α·σ), donde φ es la densidad normal; el ES siempre supera el VaR",
      "ES = VaR · (1 + α)",
      "ES = VaR / α en todos los casos",
      "Son idénticos si los retornos son simétricos",
    ],
  },
  {
    question: "¿Cuál es el principal defecto del VaR como medida de riesgo?",
    options: [
      "No informa sobre la magnitud de las pérdidas que superan el umbral del VaR (ignora la forma de la cola)",
      "Es siempre más conservador que el Expected Shortfall",
      "No puede calcularse para carteras con más de un activo",
      "Solo es válido para distribuciones normales",
    ],
  },
  {
    question: "¿Qué es la prueba de excedencias (exceptions) en backtesting?",
    options: [
      "Contar cuántos días la pérdida real supera el VaR; si son más del α% esperado el modelo puede estar mal calibrado",
      "Verificar que el VaR nunca sea superado en ningún día del período de backtesting",
      "Calcular el ES en los días en que se supera el VaR",
      "Comparar el VaR estimado con el del competidor más cercano",
    ],
  },
  {
    question: "¿Qué herramienta de Python se usa habitualmente para calcular el VaR histórico?",
    options: [
      "numpy.percentile() sobre el array de retornos históricos",
      "scipy.stats.norm.ppf() para el método paramétrico",
      "statsmodels.tsa.var para el modelo VAR econométrico",
      "pandas.DataFrame.rolling().std() para la volatilidad EWMA",
    ],
  },
  {
    question: "¿Cuál es el horizonte temporal estándar del VaR para riesgo de mercado regulatorio bajo Basilea?",
    options: [
      "10 días con nivel de confianza del 99%",
      "1 día con nivel de confianza del 95%",
      "30 días con nivel de confianza del 99%",
      "1 año con nivel de confianza del 97.5%",
    ],
  },
  {
    question: "¿Cuál es la ventaja del ES (CVaR) sobre el VaR para la gestión de carteras?",
    options: [
      "Al ser subadictivo, incentiva la diversificación: ES(A+B) ≤ ES(A) + ES(B)",
      "El ES siempre produce valores más conservadores independientemente del método",
      "El ES no requiere ningún supuesto sobre la distribución de los retornos",
      "El ES coincide exactamente con la pérdida máxima histórica",
    ],
  },
];
