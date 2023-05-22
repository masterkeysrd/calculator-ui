function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function formatDateString(date: string): string {
  return formatDate(new Date(date));
}

function useFormatDateString() {
    return formatDateString;
}