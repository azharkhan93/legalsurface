export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
    });
  }

  try {
   
    const body = await request.json();
   

   {
      return new Response(JSON.stringify({ error: "names are required" }), {
        status: 400,
      });
    }
return new Response(JSON.stringify({ message: "User added successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error adding rooms:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

// mongodb+srv://azharkhanwork101:NpJauSfkaAYRuwt5@glamsquad.qzdfoal.mongodb.net/?retryWrites=true&w=majority&appName=glamsquad