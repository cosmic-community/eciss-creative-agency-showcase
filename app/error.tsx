"use client";

export default function Error() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div>
        <h2 className="text-2xl font-semibold text-ink">Coś poszło nie tak</h2>
        <p className="mt-3 text-slate">
          Nie udało się pobrać danych. Spróbuj ponownie później.
        </p>
      </div>
    </div>
  );
}