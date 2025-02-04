import Season from '@/components/season/Season';
import { seasonsData } from '@/data/seasons';
import { notFound } from 'next/navigation';

export default async function SeasonPage({
  params,
}: {
  params: Promise<{ season: string }>;
}) {
  const seasonSlug = (await params).season;
  const season = seasonsData.findSeasonBySlug(seasonSlug);

  if (season) {
    return <Season season={season} />;
  } else {
    notFound();
  }
}
