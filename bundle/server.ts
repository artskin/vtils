import exec from 'execa'
import fs from 'fs'
import http from 'http'
import path from 'path'
import { URL } from 'url'

http
  .createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    if (req.url) {
      const url = new URL(req.url, 'http://localhost/')
      const modulesStr = url.searchParams.get('modules')
      if (modulesStr) {
        const modules = modulesStr
          .split(',')
          .map(mo => `@${mo}`)
          .join(',')
        await exec(
          'tpx',
          [
            'haoma',
            'run',
            './scripts/generateCustomDist.ts',
            '--modules',
            modules,
            '--target',
            'web-gen',
          ],
          {
            cwd: path.join(__dirname, '..'),
            stdio: 'inherit',
          },
        )
        const js = fs.readFileSync(
          path.join(__dirname, '../dist/web-gen/web-gen.js'),
          'utf-8',
        )
        const dts = fs.readFileSync(
          path.join(__dirname, '../dist/web-gen/web-gen.d.ts'),
          'utf-8',
        )
        res.end(
          JSON.stringify({
            js,
            dts,
          }),
        )
        return
      }
    }
    res.end({ ok: true })
  })
  .listen(9099, '0.0.0.0')
