import { Hook } from "@/types/hook";
import hooksData from "@/data/hooks.json";

export function getAllHooks(): Hook[] {
  return hooksData.hooks;
}

export function getHooksByCategory(category: string): Hook[] {
  if (category === "all") {
    return getAllHooks();
  }
  return hooksData.hooks.filter((hook) => hook.category === category);
}

export function searchHooks(query: string): Hook[] {
  const lowercaseQuery = query.toLowerCase();
  return hooksData.hooks.filter(
    (hook) =>
      hook.name.toLowerCase().includes(lowercaseQuery) ||
      hook.description.toLowerCase().includes(lowercaseQuery)
  );
}
