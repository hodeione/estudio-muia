import Link from "next/link";

export default function UD7() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">7</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD7: Redes Neuronales y Aprendizaje Profundo</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud6" className="text-sm text-slate-500 hover:text-blue-600">← UD6</Link>
          <Link href="/datos-estructurados/ud8" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD8 →</Link>
          <Link href="/datos-estructurados/ud7/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Perceptrón y ADALINE · 2. Redes multicapa y funciones de activación · 3. Optimizadores · 4. Proceso de entrenamiento: forward y backpropagation
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Las <strong>Redes Neuronales Artificiales</strong> (ANN) son modelos computacionales inspirados en el cerebro biológico. Consisten en capas de unidades (neuronas) conectadas entre sí, capaces de aprender representaciones jerárquicas de los datos a partir de ejemplos. El <strong>Aprendizaje Profundo</strong> (Deep Learning) se refiere al uso de redes con múltiples capas ocultas que permiten aprender características abstractas de alto nivel.
        </p>

        <h2>Tema 1: Perceptrón y ADALINE</h2>

        <h3>1.1 El Perceptrón (Rosenblatt, 1958)</h3>
        <p>
          El <strong>perceptrón</strong> es la unidad fundamental de las redes neuronales. Recibe n entradas x₁,...,x_n con pesos w₁,...,w_n y produce una salida binaria:
        </p>
        <div className="formula">z = Σⱼ wⱼ · xⱼ + w₀ (bias)</div>
        <div className="formula">ŷ = F(z)</div>
        <p>
          donde F es la función de activación (originalmente una función escalón). El perceptrón puede separar clases linealmente separables, pero falla con problemas no lineales como XOR.
        </p>

        <h3>1.2 ADALINE (Adaptive Linear Neuron)</h3>
        <p>
          <strong>ADALINE</strong> (Widrow y Hoff, 1960) usa una función de activación lineal durante el entrenamiento y minimiza el error cuadrático medio (MSE). La regla de actualización de pesos es la <strong>regla delta</strong> (gradiente descendente):
        </p>
        <div className="formula">Δwⱼ = η · (y − ŷ) · xⱼ</div>
        <p>
          donde η es la tasa de aprendizaje. ADALINE fue el precursor de las reglas de gradiente descendente usadas hoy en Deep Learning.
        </p>

        <h2>Tema 2: Redes Multicapa (MLP)</h2>

        <h3>2.1 Arquitectura general</h3>
        <p>
          Una <strong>red neuronal multicapa</strong> (Multilayer Perceptron, MLP) consiste en:
        </p>
        <ul>
          <li><strong>Capa de entrada:</strong> recibe las características del problema</li>
          <li><strong>Capas ocultas:</strong> transformaciones no lineales sucesivas (pueden ser muchas → "profundas")</li>
          <li><strong>Capa de salida:</strong> produce la predicción final (clase, valor, distribución)</li>
        </ul>
        <p>
          La clave es que cada neurona en una capa toma todas las salidas de la capa anterior, aplica una transformación lineal y luego una función de activación no lineal.
        </p>

        <h3>2.2 Funciones de activación</h3>
        <p>
          Las funciones de activación introducen la no linealidad que permite a las redes aprender representaciones complejas. Sin no linealidad, una red multicapa colapsaría a una sola transformación lineal.
        </p>
        <table>
          <thead>
            <tr><th>Función</th><th>Fórmula</th><th>Rango</th><th>Uso típico</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Sigmoid</strong></td><td>1 / (1 + e⁻ˣ)</td><td>(0, 1)</td><td>Clasificación binaria (capa de salida)</td></tr>
            <tr><td><strong>Tanh</strong></td><td>(eˣ − e⁻ˣ) / (eˣ + e⁻ˣ)</td><td>(−1, 1)</td><td>Capas ocultas (centrada en 0)</td></tr>
            <tr><td><strong>ReLU</strong></td><td>max(0, x)</td><td>[0, ∞)</td><td>Capas ocultas en DNN (más eficiente)</td></tr>
            <tr><td><strong>Leaky ReLU</strong></td><td>max(α·x, x), α pequeño</td><td>(−∞, ∞)</td><td>Evita "neuronas muertas"</td></tr>
            <tr><td><strong>ELU</strong></td><td>x si x&gt;0; α(eˣ−1) si x≤0</td><td>(−α, ∞)</td><td>Alternativa suave a ReLU</td></tr>
            <tr><td><strong>Softmax</strong></td><td>eᶻⁱ / Σⱼ eᶻʲ</td><td>(0, 1), suma=1</td><td>Clasificación multiclase (capa de salida)</td></tr>
          </tbody>
        </table>
        <p>
          <strong>ReLU</strong> es la más utilizada en capas ocultas de redes profundas porque: es computacionalmente eficiente, no sufre el problema del gradiente que desaparece (vanishing gradient) en las primeras capas, y produce activaciones sparse (muchas neuronas inactivas = 0).
        </p>

        <h2>Tema 3: Optimizadores</h2>
        <p>
          El entrenamiento de una red neuronal consiste en encontrar los pesos que minimicen la función de pérdida. Los <strong>optimizadores</strong> son los algoritmos que ajustan los pesos usando el gradiente de la pérdida.
        </p>

        <h3>3.1 SGD — Descenso de Gradiente Estocástico</h3>
        <div className="formula">w ← w − η · ∇_w L</div>
        <p>
          Actualiza los pesos en la dirección contraria al gradiente, con tasa de aprendizaje η. Es simple pero sensible a la elección de η y puede converger lentamente.
        </p>

        <h3>3.2 Adam (Adaptive Moment Estimation) — El más utilizado</h3>
        <p>
          <strong>Adam</strong> combina las ventajas de AdaGrad y RMSprop: mantiene medias móviles exponenciales del gradiente (m_t, primer momento) y del cuadrado del gradiente (v_t, segundo momento):
        </p>
        <div className="formula">mₜ = β₁·mₜ₋₁ + (1−β₁)·∇L</div>
        <div className="formula">vₜ = β₂·vₜ₋₁ + (1−β₂)·(∇L)²</div>
        <div className="formula">w ← w − η · m̂ₜ / (√v̂ₜ + ε)</div>
        <p>
          Los valores típicos son β₁=0.9, β₂=0.999, η=0.001. Adam adapta la tasa de aprendizaje de cada parámetro individualmente, lo que lo hace muy robusto a diferentes escalas de gradiente.
        </p>

        <h3>3.3 Comparativa de optimizadores</h3>
        <table>
          <thead>
            <tr><th>Optimizador</th><th>Tasa de aprendizaje</th><th>Recomendado</th></tr>
          </thead>
          <tbody>
            <tr><td>SGD</td><td>Fija</td><td>Con momentum para CV y NLP clásico</td></tr>
            <tr><td>RMSprop</td><td>Adaptativa por parámetro</td><td>RNN y problemas con gradientes no estacionarios</td></tr>
            <tr><td>Adam</td><td>Adaptativa con momentum</td><td>Uso general — recomendado por defecto</td></tr>
            <tr><td>AdamW</td><td>Adam + weight decay</td><td>Transformers y modelos grandes (GPT, BERT)</td></tr>
          </tbody>
        </table>

        <h2>Tema 4: Proceso de Entrenamiento</h2>

        <h3>4.1 Ciclo completo de entrenamiento</h3>
        <p>
          El entrenamiento de una red neuronal sigue un ciclo repetido para cada batch de datos:
        </p>
        <ol>
          <li>
            <strong>Forward Propagation:</strong> los datos pasan de la capa de entrada a la de salida capa a capa. Cada capa calcula a^(l) = F(W^(l)·a^(l-1) + b^(l)). Se obtiene la predicción ŷ.
          </li>
          <li>
            <strong>Cálculo de la Función de Pérdida:</strong> se mide el error entre ŷ e y. Para clasificación binaria: BCE = −[y·log(ŷ) + (1−y)·log(1−ŷ)]. Para regresión: MSE = (1/n)·Σ(y−ŷ)².
          </li>
          <li>
            <strong>Backpropagation:</strong> se calcula el gradiente de la pérdida respecto a cada peso aplicando la regla de la cadena hacia atrás (del output al input): δ^(l) = (W^(l+1))ᵀ · δ^(l+1) ⊙ F'(z^(l)).
          </li>
          <li>
            <strong>Actualización de pesos:</strong> el optimizador usa los gradientes para actualizar los pesos: W ← W − η·∇_W L.
          </li>
        </ol>

        <h3>4.2 Conceptos clave del entrenamiento</h3>
        <ul>
          <li><strong>Epoch:</strong> una pasada completa por todo el dataset de entrenamiento</li>
          <li><strong>Batch size:</strong> número de ejemplos usados para calcular el gradiente en cada paso</li>
          <li><strong>Mini-batch SGD:</strong> batch intermedio entre SGD puro (1 ejemplo) y Batch GD (todo el dataset)</li>
          <li><strong>Learning rate schedule:</strong> reducir η progresivamente para mejorar convergencia</li>
          <li><strong>Early stopping:</strong> parar el entrenamiento cuando la pérdida de validación deja de mejorar</li>
          <li><strong>Dropout:</strong> desactivar neuronas aleatoriamente durante entrenamiento para regularizar</li>
          <li><strong>Batch Normalization:</strong> normalizar activaciones de cada capa para estabilizar el entrenamiento</li>
        </ul>

        <h3>4.3 Implementación en Keras</h3>
        <pre className="bg-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>{`import tensorflow as tf
from tensorflow import keras

# Definición de la arquitectura
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(n_features,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')  # clasificación binaria
])

# Compilación
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Entrenamiento
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.2,
    callbacks=[keras.callbacks.EarlyStopping(patience=5)]
)`}</code></pre>

        <h3>4.4 Problemas comunes y soluciones</h3>
        <table>
          <thead>
            <tr><th>Problema</th><th>Síntoma</th><th>Solución</th></tr>
          </thead>
          <tbody>
            <tr><td>Vanishing gradient</td><td>Capas profundas no aprenden</td><td>ReLU, BatchNorm, skip connections</td></tr>
            <tr><td>Overfitting</td><td>Val loss sube, train loss baja</td><td>Dropout, L2 regularization, more data</td></tr>
            <tr><td>Learning rate alto</td><td>Loss oscila o diverge</td><td>Reducir η, learning rate schedule</td></tr>
            <tr><td>Neuronas muertas</td><td>ReLU siempre 0</td><td>Leaky ReLU, ELU, inicialización correcta</td></tr>
          </tbody>
        </table>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud6" className="text-sm text-slate-500 hover:text-blue-600">← UD6: Modelos GARCH</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud7/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD7</Link>
          <Link href="/datos-estructurados/ud8" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD8 →</Link>
        </div>
      </div>
    </div>
  );
}
