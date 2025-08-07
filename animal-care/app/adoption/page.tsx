"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function NewPetPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    species: "",
    age: "",
    description: "",
    status: "adoption",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload a JPG or PNG image only.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setUploading(true);

    let imageUrl = "";

   if (imageFile) {
  const fileExt = imageFile.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `public/${fileName}`; // 👈 optional folder name

  const { data, error } = await supabase.storage
    .from("pet-images") // ✅ matches the new bucket you created
    .upload(filePath, imageFile);

  if (error) {
    alert("Image upload failed.");
    console.error("Supabase Upload Error:", error.message);
    setUploading(false);
    return;
  }

 const { data: publicUrlData } = supabase.storage
  .from("pet-images")
  .getPublicUrl(filePath);

imageUrl = publicUrlData?.publicUrl || "";

}


    const res = await fetch("/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, age: parseInt(form.age), imageUrl }),
    });

    setUploading(false);

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Failed to submit pet");
    }
  };

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🐶 Add a Pet for Adoption or Report as Lost</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pet Name */}
          <div>
            <label className="block font-medium mb-1">Pet Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300"
              placeholder="e.g., Bruno"
            />
          </div>

          {/* Species */}
          <div>
            <label className="block font-medium mb-1">Species</label>
            <input
              name="species"
              value={form.species}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300"
              placeholder="e.g., Dog, Cat"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300"
              placeholder="e.g., 3"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-1">Upload Pet Image (JPG/PNG)</label>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleImageChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded border"
                />
              </div>
            )}
            {uploading && (
              <p className="text-green-600 mt-2 animate-pulse">Uploading image...</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300"
            >
              <option value="adoption">Available for Adoption</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded border border-gray-300"
              placeholder="Describe the pet, temperament, or last seen location..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
          >
            {uploading ? "Submitting..." : "Submit Pet"}
          </button>
        </form>
      </div>
    </main>
  );
}
