/* =====================
        AUTO-GROW TEXTAREAS
        ===================== */
        document.querySelectorAll(".auto-grow").forEach(el => {
            el.addEventListener("input", () => {
                el.style.height = "auto";
                el.style.height = el.scrollHeight + "px";
            });
        });

        /* =====================
        IMAGE PREVIEW
        ===================== */
        const photoInput = document.getElementById("photoInput");
        const preview = document.getElementById("preview");

        photoInput.addEventListener("change", () => {
            const file = photoInput.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = e => {
                preview.src = e.target.result;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        });

        /* =====================
        FORM SUBMIT
        ===================== */
        document.getElementById("recipeForm").addEventListener("submit", async e => {
            e.preventDefault();

            const form = e.target;
            const error = document.getElementById("formError");

            // Parse ingredients into array
            const ingredients = form.ingredients.value
                .split("\n")
                .map(line => line.trim())
                .filter(Boolean);

            if (ingredients.length === 0) {
                error.textContent = "Please add at least one ingredient.";
                return;
            }

            const payload = {
                title: form.title.value,
                category: form.category.value,
                prepTime: form.prepTime.value,
                servings: form.servings.value,
                ingredients,
                directions: form.directions.value,
                notes: form.notes.value,
                contributor: form.contributor.value
            };

            try {
                // 🔌 BACKEND HOOK (replace URL)
                await fetch("https://your-api-endpoint/recipes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });

                alert("Recipe submitted! 🎉");
                form.reset();
                preview.style.display = "none";
            } catch {
                error.textContent = "Something went wrong. Please try again.";
            }
        });
        