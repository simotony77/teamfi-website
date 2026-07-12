# Teamfi Conseil — Site vitrine

Site professionnel bilingue (français par défaut, bascule EN) pour **Teamfi Conseil**,
cabinet indépendant spécialisé en systèmes d'information financiers et finance quantitative.

## Structure

```
index.html      — page unique (hero, à propos, expertises, valeurs, carrières, contact)
css/style.css   — design system (navy/or, Sora + Inter)
js/i18n.js      — dictionnaire FR/EN + bascule de langue (persistée en localStorage)
js/main.js      — menu mobile, animations au scroll, année du footer
```

Aucun build, aucune dépendance : c'est un site statique pur. Il s'héberge tel quel sur
Netlify, Vercel, GitHub Pages, OVH, ou n'importe quel hébergeur mutualisé.

## Lancer en local

```bash
npx serve .
# puis ouvrir http://localhost:3000
```

(ou simplement double-cliquer `index.html`)

## À confirmer avec Ouassim avant mise en ligne

- [ ] **Email de contact** : `contact@teamfi-conseil.fr` est un placeholder — remplacer
      par la vraie adresse (dans `index.html` : lien mailto + action du formulaire).
- [ ] **Adresse postale** : « Paris, France » — préciser si souhaité.
- [ ] **Logo** : `assets/logo.svg` est une recréation vectorielle du logo officiel (monogramme
      « Fi » or/blanc sur noir). Si le fichier source original (SVG/PNG haute définition) est
      disponible, le déposer dans `assets/` sous le même nom pour le remplacer.
- [ ] **Offres d'emploi** : les deux offres affichées viennent de la page LinkedIn
      (Business Analyst RISK & PNL, Analyste Quantitatif / IT Quant) — valider les intitulés
      et descriptions.
- [ ] **Formulaire de contact** : actuellement en `mailto:` (ouvre le client mail du visiteur).
      Pour un vrai envoi côté serveur, brancher un service type Formspree, Netlify Forms ou
      un endpoint dédié.
- [ ] **Mentions légales / politique de confidentialité** : à ajouter (obligatoire en France
      pour un site d'entreprise — SIREN, hébergeur, RGPD).

## Sources du contenu

Le contenu du site (présentation, expertises, valeurs, offres d'emploi) provient des pages
officielles LinkedIn de Teamfi Conseil :

- Page entreprise : https://www.linkedin.com/company/teamfi-conseil/
- À propos : https://www.linkedin.com/company/teamfi-conseil/about/
- Offres d'emploi : https://www.linkedin.com/jobs/search-results/?currentJobId=4371002647&keywords=jobs&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=4371002647%2C4370993761&geoId=105015875&f_C=105166143

## Traductions

Tout le contenu FR/EN vit dans `js/i18n.js`. Pour modifier un texte, éditer la clé
correspondante dans les deux dictionnaires (`fr` et `en`). Le HTML contient le français
par défaut (bon pour le SEO francophone).
