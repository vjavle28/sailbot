import type { APIRoute } from "astro";
import { supabase } from "../../../../utils/database";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  if (!id) {
    return new Response("No sensor id provided", { status: 400 });
  }

  if (supabase) {
    const { data: sensor, error } = await supabase
      .from("sailboat_sensor_data")
      .select("*")
      .eq("id", Number(id))
      .single();

    if (error || !sensor) {
      return new Response(JSON.stringify({ error: error?.message ?? "Not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(sensor), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("No supabase client available", { status: 400 });
};
