$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$lines = [System.Collections.Generic.List[string]]::new()
$source = Join-Path $PSScriptRoot 'src\PortfolioHome.jsx'
$content = Get-Content -LiteralPath $source
$hits = Select-String -LiteralPath $source -Pattern 'testimonial|words from|client|add a short|brand identity and communication' -CaseSensitive:$false
$seen = @{}
foreach ($hit in $hits) {
  $start = [Math]::Max(1, $hit.LineNumber - 12)
  $end = [Math]::Min($content.Count, $hit.LineNumber + 18)
  for ($i = $start; $i -le $end; $i++) {
    if (-not $seen.ContainsKey($i)) {
      $seen[$i] = $true
      $lines.Add(('{0,5}: {1}' -f $i, $content[$i - 1]))
    }
  }
  $lines.Add('-----')
}

$lines.Add('TESTIMONIAL ASSETS')
$assetDir = 'C:\Users\erism\Documents\GitHub\eriseris.github.io\images\Testimonial'
Get-ChildItem -LiteralPath $assetDir -File | Sort-Object Name | ForEach-Object {
  $lines.Add(('{0} | {1} bytes' -f $_.Name, $_.Length))
}

$font = New-Object System.Drawing.Font('Consolas', 12)
$height = [Math]::Min(30000, [Math]::Max(1200, ($lines.Count * 22) + 60))
$bmp = New-Object System.Drawing.Bitmap(1900, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.Clear([System.Drawing.Color]::White)
$brush = [System.Drawing.Brushes]::Black
$y = 20
foreach ($line in $lines) {
  if ($y -gt ($height - 30)) { break }
  $graphics.DrawString($line, $font, $brush, 20, $y)
  $y += 22
}
$out = Join-Path $PSScriptRoot '_inspect.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bmp.Dispose()
$font.Dispose()
