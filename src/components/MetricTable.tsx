type MetricRow = {
  metric: string;
  value: string;
  implication: string;
};

export function MetricTable({ rows }: { rows: readonly MetricRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-brand-navy/10 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-brand-navy/10 bg-surface">
          <tr>
            <th className="px-4 py-3 font-semibold text-brand-navy sm:px-6">Metric</th>
            <th className="px-4 py-3 font-semibold text-brand-navy sm:px-6">Data</th>
            <th className="px-4 py-3 font-semibold text-brand-navy sm:px-6">Strategy implication</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.metric} className="border-b border-brand-navy/5 last:border-0">
              <td className="px-4 py-4 align-top font-medium text-brand-navy sm:px-6">{row.metric}</td>
              <td className="px-4 py-4 align-top text-brand-black/80 sm:px-6">{row.value}</td>
              <td className="px-4 py-4 align-top text-brand-black/75 sm:px-6">{row.implication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
