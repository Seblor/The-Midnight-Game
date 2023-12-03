export function minutesToHumanReadable(minutes: number): string {
  const absMinutes = Math.abs(minutes);
  const hours = Math.floor(absMinutes / 60);
  const minutesLeft = absMinutes % 60;
  return `${minutes < 0 ? '-' : '+'}${hours}h${minutesLeft}`;
}

export function getTimeZoneOffsetOfLocale(locale: string): string {
  return Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
    timeZone: locale,
  })
    .formatToParts()
    .find((i) => i.type === "timeZoneName")?.value ?? 'UTC';
}

export function getTimeZoneMinutesOffsetOfLocale(locale: string): number {
  const offset = getTimeZoneOffsetOfLocale(locale);
  const sign = offset.includes('-') ? -1 : 1;
  const [hours = 0, minutes = 0] = offset.slice(4).split(':').map(i => parseInt(i));
  return sign * (hours * 60 + minutes);
}