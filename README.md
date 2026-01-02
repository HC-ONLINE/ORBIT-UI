# ORBIT-UI

Design system **CSS-first** construido con Astro y Tailwind CSS v4.  
Enfocado en **tokens semánticos**, **contratos explícitos** y **control de complejidad**.

No es un UI kit visual.  
No pretende cubrir todos los casos.

---

## Principios

- Tokens antes que clases
- Estados explícitos, no implícitos
- Separación entre estructura, acción y navegación
- Sin JavaScript innecesario
- Menos variantes

---

## Estructura

```text
src/
├── pages/
│   ├── index.astro        # Filosofía del sistema
│   ├── tokens.astro       # Design tokens
│   └── components/        # Documentación de componentes
│
├── components/
│   ├── layout/            # Header, Footer
│   └── ui/                # Componentes base (Card, Button, etc.)
│
├── styles/
│   ├── theme.css          # Tokens (@theme)
│   ├── base.css           # Base / reset
│   └── components.css    # @layer components
│
└── layouts/
└── BaseLayout.astro

````

---

## Tokens

Los tokens viven en `src/styles/theme.css` y representan **significado**, no uso.

Categorías:

- Surface
- Text
- Accent
- Status
- Typography

Los tokens **no conocen componentes**.  
Los componentes deciden cómo aplicarlos.

Ejemplo:

```css
--color-text-muted
--color-surface-elevated
--color-status-error
````

Uso con Tailwind v4:

```html
text-(--color-text-muted)
bg-(--color-surface-elevated)
border-(--color-status-error)
```

---

## Componentes

Cada componente tiene:

- Estados válidos y no válidos
- Uso recomendado
- Antipatrones documentados

Componentes actuales:

- Card
- Button
- NavLink
- Alert
- Badge

---

## Qué **no** es orbit-ui

- No es un framework
- No es un UI kit visual
- No incluye animaciones ni efectos
- No abstrae Tailwind

---

## Licencia

Este proyecto está bajo la Licencia Apache-2.0 (Apache License 2.0). Ver [LICENSE](LICENSE) para más detalles.

---

## Hecho con ❤️ por HC-ONLINE

⭐ **Si te resulta útil, deja una estrella en GitHub** ⭐
