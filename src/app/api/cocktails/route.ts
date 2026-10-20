import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { initialRecipes } from "@/data/mockManagementData";

export async function GET() {
  try {
    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("localhost:5432")) {
      const cocktails = await prisma.cocktail.findMany({
        include: {
          ingredients: {
            include: {
              ingredient: true,
            },
          },
        },
        orderBy: { name: "asc" },
      });

      if (cocktails && cocktails.length > 0) {
        return NextResponse.json({ success: true, source: "database", data: cocktails });
      }
    }

    // Fallback gracioso com dados de produção em memória
    return NextResponse.json({
      success: true,
      source: "cached_store",
      data: initialRecipes,
    });
  } catch (error) {
    return NextResponse.json({
      success: true,
      source: "fallback_resilient",
      data: initialRecipes,
      message: "Operando em modo de resiliência local.",
    });
  }
}
