const pillarData = {
  economic: {
    kicker: 'Pillar 01 · Return + public value',
    title: 'Economic Development',
    summary: 'Use recovered resources and shared infrastructure to create durable businesses, permanent employment, local purchasing, avoided disposal costs, and a broader regional tax base.',
    interventions: [
      'Urban wood receiving, classification, milling, drying, and product manufacturing',
      'Greenhouse, mushroom, compost, biochar, and soil-product enterprises',
      'Satellite yards and consolidated logistics close to feedstock sources',
      'Shared services for utilities, laboratories, maintenance, distribution, and training'
    ],
    outcomes: [
      'Diversified revenue beyond data-center operations',
      'Permanent jobs across technical, trades, production, restoration, and support roles',
      'Local supplier and small-business growth',
      'Lower municipal debris handling and disposal burdens',
      'Expanded taxable economic activity and productive land use'
    ],
    metrics: [
      'Direct permanent FTEs, wages, benefits, and local-hire share',
      'Annual local and disadvantaged-business procurement',
      'Revenue by product and avoided disposal cost',
      'Private capital mobilized and public subsidy per permanent job',
      'Tax revenues net of public infrastructure and service costs'
    ],
    dependencies: [
      'Reliable clean feedstocks and long-term supply agreements',
      'Qualified operators and commercial buyers',
      'Land, truck access, utilities, and working capital',
      'Product quality systems and realistic market pricing'
    ],
    controls: [
      'Do not count temporary construction jobs as permanent operating jobs',
      'Report gross and net fiscal effects separately',
      'Separate projected revenue from contracted revenue',
      'Track contamination, rejects, residuals, and disposal costs'
    ],
    evidence: ['Payroll and HR records', 'Vendor and purchasing ledgers', 'Scale tickets and inventory systems', 'Audited financial statements', 'Municipal fiscal analysis'],
    mapping: ['Envision: Resource Allocation', 'Six Capitals: Financial + Manufactured', 'IRIS+: Employment + Waste', 'SDG communication: 8, 9, 12']
  },
  infrastructure: {
    kicker: 'Pillar 02 · Return + resilience',
    title: 'Infrastructure & Resource Efficiency',
    summary: 'Treat heat, water, land, logistics, utilities, and operational data as shared infrastructure that can improve both ecosystem performance and data-center legitimacy.',
    interventions: [
      'Waste-heat interconnection, metering, thermal storage, and backup systems',
      'Water capture, treatment, reuse, stormwater management, and quality monitoring',
      'Shared roads, utilities, fire access, utility corridors, and resilient site planning',
      'Satellite receiving yards and coordinated movement of feedstocks and products'
    ],
    outcomes: [
      'Lower demand for new thermal energy and potable water',
      'Improved stormwater performance and flood resilience',
      'Reduced congestion at the core campus',
      'More efficient use of land and capital-intensive utilities',
      'Greater operational resilience through redundancy and contractual interfaces'
    ],
    metrics: [
      'Useful heat delivered by temperature, flow, availability, and end use',
      'Water captured, treated, reused, discharged, and potable demand offset',
      'Truck movements, distances, queueing, and congestion reduction',
      'Utility uptime, curtailments, interruptions, and recovery time',
      'Capital and operating cost allocated by shared-service user'
    ],
    dependencies: [
      'Data-center thermal profile and willingness to contract for heat access',
      'Water quality, treatment requirements, storage, and permits',
      'Long-term easements and access rights',
      'Fire, safety, emergency shutdown, and business-continuity design'
    ],
    controls: [
      'Do not assume waste heat is free or continuously available',
      'Meter every transfer point and define ownership of losses',
      'Design for data-center sale, operator change, closure, and curtailment',
      'Separate potable, process, stormwater, and recovered-water systems'
    ],
    evidence: ['Revenue-grade heat and water meters', 'SCADA and outage logs', 'Utility bills', 'Traffic and logistics records', 'Interconnection and service agreements'],
    mapping: ['Envision: Resource Allocation + Resilience', 'Six Capitals: Manufactured', 'IRIS+: Energy + Water', 'Natural Capital Protocol: Dependencies']
  },
  environment: {
    kicker: 'Pillar 03 · Natural capital + resilience',
    title: 'Environmental Performance',
    summary: 'Restore ecological function across forests, wetlands, soils, water systems, habitat corridors, and heat-vulnerable landscapes while measuring condition—not only acreage.',
    interventions: [
      'Forest inventory, invasive control, native regeneration, structural diversity, and stewardship',
      'Wetland, stream, floodplain, and riparian restoration based on hydrology',
      'Compost, biochar, mushroom substrate, and tested digestate formulations for degraded soils',
      'Urban canopy, shade, stormwater infrastructure, and habitat connectivity'
    ],
    outcomes: [
      'Improved forest and wetland condition',
      'Greater habitat quality and landscape connectivity',
      'Carbon storage in biomass, soils, and durable products',
      'Reduced surface temperature, flooding, erosion, and nutrient loss',
      'Improved water quality, infiltration, and ecological resilience'
    ],
    metrics: [
      'Acres by ecosystem type, condition class, and stewardship status',
      'Native species survival, recruitment, invasive cover, and canopy structure',
      'Hydrology, water quality, infiltration, and stormwater retained',
      'Soil carbon, organic matter, compaction, water holding, and biological indicators',
      'Temperature and shade reduction at the campus and affected neighborhoods'
    ],
    dependencies: [
      'Baseline ecological surveys and reference conditions',
      'Long-term land control, easements, or stewardship agreements',
      'Appropriate soil products with contaminant and maturity testing',
      'Qualified ecologists, foresters, hydrologists, and restoration contractors'
    ],
    controls: [
      'Do not equate planted acres with restored ecosystem condition',
      'Do not treat biomass removal as restoration without ecological justification',
      'Track leakage, reversals, mortality, and maintenance requirements',
      'Avoid claiming mitigation credits without formal regulatory approval'
    ],
    evidence: ['GIS and surveyed boundaries', 'Permanent monitoring plots', 'Water and soil laboratory results', 'Remote sensing and thermal measurements', 'Independent ecological review'],
    mapping: ['Envision: Natural World + Climate', 'Six Capitals: Natural', 'CICES + SEEA Ecosystem Accounting', 'Natural Capital Protocol']
  },
  community: {
    kicker: 'Pillar 04 · Human + social capital',
    title: 'Community & Public Value',
    summary: 'Convert infrastructure investment into enforceable, visible benefits for nearby residents, schools, workers, local businesses, and community institutions.',
    interventions: [
      'Compensated community design council and transparent planning process',
      'Community benefits agreement with measurable obligations and remedies',
      'Paid training, apprenticeships, school partnerships, and career pathways',
      'Food access, community gardens, public research, cooling, and health-focused programs'
    ],
    outcomes: [
      'Better access to stable jobs, skills, and advancement',
      'Stronger schools, local institutions, and community ownership pathways',
      'Reduced heat exposure and improved neighborhood resilience',
      'Greater access to food, green space, and educational assets',
      'Higher trust through enforceable commitments and public reporting'
    ],
    metrics: [
      'Local hires, retention, wages, benefits, promotions, and worker demographics where lawful',
      'Training enrollment, completion, credentials, placement, and earnings progression',
      'School participation, paid internships, teacher programs, and curriculum use',
      'Community-benefit commitments delivered on time and remedies triggered',
      'Heat exposure, tree shade, food access, and resident-reported outcomes'
    ],
    dependencies: [
      'Early engagement before site and agreements are fixed',
      'Dedicated annual funding rather than discretionary donations',
      'Partners capable of recruiting, training, support, and evaluation',
      'Community governance with access to data and enforcement mechanisms'
    ],
    controls: [
      'Measure who receives benefits and who bears traffic, noise, risk, and land-use burdens',
      'Do not substitute one-time donations for structural benefits',
      'Use privacy-preserving reporting for individual outcomes',
      'Include grievance, correction, and independent verification processes'
    ],
    evidence: ['Community-benefit agreement tracker', 'Training and school records', 'Resident surveys and qualitative research', 'Public health and thermal data', 'Independent community oversight reports'],
    mapping: ['Envision: Quality of Life + Leadership', 'Six Capitals: Human + Social', 'IRIS+: Education + Employment + Health', 'Social Value / SROI']
  }
};

const metricData = {
  jobs: {
    title: 'Jobs Created',
    definition: 'Net direct permanent full-time-equivalent positions supported by operating entities, excluding temporary construction labor unless separately reported.',
    unit: 'FTEs, headcount, wages, benefits, occupation, local-hire status',
    baseline: 'Existing employment on the selected site and in comparable disposal / processing systems',
    source: 'Payroll, HR, contractor records, and annual operator attestations',
    cadence: 'Quarterly with annual reconciliation',
    verification: 'Independent sample review of payroll and job classification',
    caution: 'Report direct, indirect, induced, temporary, and permanent jobs separately.'
  },
  training: {
    title: 'Apprentices Trained',
    definition: 'Paid participants receiving structured instruction, supervised work experience, and documented competencies or credentials.',
    unit: 'Enrollment, completion, credential, placement, retention, wage progression',
    baseline: 'Existing local training capacity and participant outcomes',
    source: 'Training-provider records, employer records, credential databases',
    cadence: 'Per cohort and annually',
    verification: 'Participant-level reconciliation using privacy-preserving IDs',
    caution: 'Do not count brief outreach events as apprenticeship or workforce training.'
  },
  procurement: {
    title: 'Local Procurement',
    definition: 'Eligible project spending paid to qualified businesses within a defined geography, with separate reporting for small and disadvantaged firms.',
    unit: 'Dollars and percent of addressable spend',
    baseline: 'Current local vendor availability and comparable procurement',
    source: 'Accounts payable, vendor registry, contract data',
    cadence: 'Quarterly',
    verification: 'Address, ownership, and transaction sampling',
    caution: 'Define local geography and addressable spend before setting a percentage target.'
  },
  acres: {
    title: 'Acres Restored',
    definition: 'Land under active restoration and long-term stewardship that meets defined ecological condition thresholds—not merely planted acreage.',
    unit: 'Acres by ecosystem type, condition, permanence, and connectivity',
    baseline: 'Mapped ecosystem extent and condition before intervention',
    source: 'GIS, field surveys, permanent plots, remote sensing',
    cadence: 'Seasonal monitoring and annual reporting',
    verification: 'Qualified third-party ecological assessment',
    caution: 'Report creation, enhancement, preservation, and maintenance separately.'
  },
  water: {
    title: 'Water Reused',
    definition: 'Metered non-potable or recovered water reused for an eligible purpose, net of recirculation double counting.',
    unit: 'Gallons or cubic meters by source, treatment, end use, and potable offset',
    baseline: 'Pre-project water balance and conventional reference case',
    source: 'Revenue-grade meters, treatment logs, utility bills',
    cadence: 'Monthly',
    verification: 'Meter calibration and mass-balance reconciliation',
    caution: 'Distinguish gross recirculated volume from net water withdrawal avoided.'
  },
  waste: {
    title: 'Waste Diverted',
    definition: 'Accepted material converted to verified products or beneficial uses instead of disposal, net of rejects and residual disposal.',
    unit: 'Tons by feedstock, contamination, product, residual, and final fate',
    baseline: 'Current disposal destination and quantity',
    source: 'Certified scales, tickets, inventory, sales records, disposal receipts',
    cadence: 'Monthly',
    verification: 'Mass balance and downstream destination checks',
    caution: 'Receiving material is not diversion unless its final beneficial use is verified.'
  },
  carbon: {
    title: 'CO2e Reduced',
    definition: 'Net greenhouse-gas reduction within a defined boundary relative to a documented reference case, including energy, transport, decay, storage, leakage, and uncertainty.',
    unit: 'Metric tons CO2e by source and claim type',
    baseline: 'Reference energy, disposal, transport, land, and product systems',
    source: 'Meters, activity data, lifecycle models, inventories',
    cadence: 'Annual with periodic model updates',
    verification: 'Independent review under an identified accounting standard',
    caution: 'Keep avoided emissions, removals, biogenic storage, and purchased offsets separate.'
  },
  leverage: {
    title: 'Public-Private Leverage',
    definition: 'Eligible private capital committed or spent relative to public and philanthropic support, with terms, risk, and timing disclosed.',
    unit: 'Dollar ratio plus capital type, seniority, duration, and conditions',
    baseline: 'Existing project capital and predevelopment support',
    source: 'Closing documents, grant agreements, audited capital accounts',
    cadence: 'At closing and quarterly during deployment',
    verification: 'Financial audit and eligibility reconciliation',
    caution: 'Do not count the same capital in multiple leverage ratios or include uncommitted expressions of interest.'
  }
};

const lensText = {
  all: 'All four lenses are active. Select a lens to emphasize the most relevant outcomes, metrics, and risks.',
  return: 'Return emphasizes bankable products, avoided costs, operating efficiency, tax-base effects, and capital leverage.',
  public: 'Public value emphasizes jobs, skills, schools, food access, health, equitable distribution, and enforceable community benefits.',
  resilience: 'Resilience emphasizes resource security, ecological condition, redundancy, heat mitigation, stormwater, and long-term stewardship.',
  accountability: 'Accountability emphasizes baselines, boundaries, target owners, contracts, metering, verification, disclosure, and remedies.'
};

const loopData = {
  heat: '<strong>Heat loop:</strong> characterize temperature, flow, availability, seasonal profile, distance, backup requirements, and user demand. Potential users include lumber kilns, greenhouse heating, substrate pasteurization, digesters, and water treatment. Control points include metering, ownership of interconnection equipment, curtailment, and outage response.',
  water: '<strong>Water loop:</strong> map every source and quality class before matching it to an end use. Track treatment, storage, reuse, discharge, evaporation, stormwater retention, and net potable-water offset. Keep food-grade, process, stormwater, and recovered water physically and analytically distinct.',
  materials: '<strong>Materials loop:</strong> separate clean dry wood from wet organics. Route logs to lumber and wood products; fines and selected clean residues to mushrooms, mulch, compost, or biochar; wet organics to digestion or controlled composting. Verify contamination, product quality, residuals, and final destination.',
  value: '<strong>Value loop:</strong> productive operations create revenues, jobs, taxes, skills, ecological gains, and public benefits. Enforceable agreements and transparent reporting convert those outcomes into trust and long-term operating legitimacy. Community burdens and benefit distribution must be tracked alongside aggregate value.'
};

const evidenceData = {
  envision: {
    kicker: 'Primary infrastructure framework',
    title: 'Envision',
    body: 'Use Envision to structure planning and assurance across Quality of Life, Leadership, Resource Allocation, Natural World, and Climate & Resilience. It helps the project address lifecycle performance, stakeholder participation, siting, materials, water, energy, biodiversity, resilience, and long-term management.',
    bullets: ['Use early as a design checklist, not only as a final rating exercise.', 'Assign credits to accountable workstream owners.', 'Maintain evidence files from concept through operations.', 'Use gaps to identify missing governance and lifecycle controls.']
  },
  capitals: {
    kicker: 'Benefit classification',
    title: 'Six Capitals',
    body: 'Classify value as financial, manufactured, intellectual, human, social/relationship, and natural capital. This exposes transformations that the public four-pillar framework can obscure—for example, converting waste heat and land into jobs, knowledge, ecological function, and community institutions.',
    bullets: ['Record increases, decreases, dependencies, and tradeoffs.', 'Treat research and operating know-how as intellectual capital.', 'Separate community trust from direct financial value.', 'Avoid presenting natural-capital gains without associated impacts.']
  },
  ecosystems: {
    kicker: 'Ecological accounting',
    title: 'CICES + SEEA Ecosystem Accounting',
    body: 'Use CICES to classify provisioning, regulation/maintenance, and non-material ecosystem services. Use SEEA Ecosystem Accounting to track ecosystem extent, condition, service flows, and their relationship to economic activity.',
    bullets: ['Measure condition as well as acres.', 'Keep service beneficiaries and geographic reach explicit.', 'Track restoration permanence and maintenance.', 'Connect forest, wetland, soil, water, habitat, and cooling accounts.']
  },
  impact: {
    kicker: 'Investor and community outcomes',
    title: 'IRIS+ + Social Value',
    body: 'Use IRIS+ for standardized investor-facing metrics and Social Value methods for stakeholder-defined outcomes, attribution, distribution, and well-being. Together they connect capital providers’ requirements to community accountability.',
    bullets: ['Use standardized metrics where they fit; document custom metrics where they do not.', 'Identify who experiences each outcome and over what period.', 'Estimate attribution and avoid claiming outcomes caused by other programs.', 'Include qualitative evidence and stakeholder interpretation alongside numbers.']
  }
};

const detailDialog = document.getElementById('detail-dialog');
const dialogKicker = document.getElementById('dialog-kicker');
const dialogTitle = document.getElementById('dialog-title');
const dialogContent = document.getElementById('dialog-content');
const imageDialog = document.getElementById('image-dialog');

function list(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function openPillar(key) {
  const item = pillarData[key];
  if (!item) return;
  dialogKicker.textContent = item.kicker;
  dialogTitle.textContent = item.title;
  dialogContent.innerHTML = `
    <p class="detail-summary">${item.summary}</p>
    <div class="detail-grid">
      <section class="detail-block"><h3>Primary interventions</h3>${list(item.interventions)}</section>
      <section class="detail-block"><h3>Intended outcomes</h3>${list(item.outcomes)}</section>
      <section class="detail-block"><h3>Candidate metrics</h3>${list(item.metrics)}</section>
      <section class="detail-block"><h3>Critical dependencies</h3>${list(item.dependencies)}</section>
      <section class="detail-block"><h3>Controls and non-claims</h3>${list(item.controls)}</section>
      <section class="detail-block"><h3>Evidence sources</h3>${list(item.evidence)}</section>
      <section class="detail-block full"><h3>Framework mapping</h3><div class="mapping-tags">${item.mapping.map(tag => `<span>${tag}</span>`).join('')}</div></section>
    </div>`;
  detailDialog.showModal();
}

function openMetric(key) {
  const item = metricData[key];
  if (!item) return;
  dialogKicker.textContent = 'Scorecard metric · definition before target';
  dialogTitle.textContent = item.title;
  dialogContent.innerHTML = `
    <p class="detail-summary">${item.definition}</p>
    <div class="detail-grid">
      <section class="detail-block"><h3>Unit and disaggregation</h3><p>${item.unit}</p></section>
      <section class="detail-block"><h3>Baseline requirement</h3><p>${item.baseline}</p></section>
      <section class="detail-block"><h3>Source of record</h3><p>${item.source}</p></section>
      <section class="detail-block"><h3>Reporting cadence</h3><p>${item.cadence}</p></section>
      <section class="detail-block"><h3>Verification</h3><p>${item.verification}</p></section>
      <section class="detail-block"><h3>Double-counting / claim control</h3><p>${item.caution}</p></section>
      <section class="detail-block full"><h3>Required setup</h3><div class="mapping-tags"><span>Definition</span><span>Boundary</span><span>Baseline</span><span>Target</span><span>Owner</span><span>Verification</span><span>Disclosure</span></div></section>
    </div>`;
  detailDialog.showModal();
}

document.querySelectorAll('[data-pillar]').forEach(button => {
  button.addEventListener('click', () => openPillar(button.dataset.pillar));
});
document.querySelectorAll('[data-metric]').forEach(button => {
  button.addEventListener('click', () => openMetric(button.dataset.metric));
});
document.querySelector('[data-close-dialog]').addEventListener('click', () => detailDialog.close());
detailDialog.addEventListener('click', event => {
  if (event.target === detailDialog) detailDialog.close();
});

document.querySelectorAll('[data-open-image]').forEach(button => button.addEventListener('click', () => imageDialog.showModal()));
document.querySelector('[data-close-image]').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => {
  if (event.target === imageDialog) imageDialog.close();
});

document.querySelectorAll('.lens-button').forEach(button => {
  button.addEventListener('click', () => {
    const lens = button.dataset.lens;
    document.querySelectorAll('.lens-button').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.getElementById('lens-summary').textContent = lensText[lens];
    document.querySelectorAll('[data-lenses]').forEach(item => {
      const matches = lens === 'all' || item.dataset.lenses.split(' ').includes(lens);
      item.classList.toggle('is-muted', !matches);
    });
  });
});

document.querySelectorAll('[data-loop]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-loop]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('loop-detail').innerHTML = loopData[button.dataset.loop];
  });
});

const tabButtons = [...document.querySelectorAll('[role="tab"]')];
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(item => item.setAttribute('aria-selected', 'false'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.hidden = true);
    button.setAttribute('aria-selected', 'true');
    document.getElementById(button.getAttribute('aria-controls')).hidden = false;
  });
});

document.querySelectorAll('[data-evidence]').forEach(button => {
  button.addEventListener('click', () => {
    const data = evidenceData[button.dataset.evidence];
    document.querySelectorAll('[data-evidence]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('evidence-detail').innerHTML = `
      <span class="detail-kicker">${data.kicker}</span>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      ${list(data.bullets)}`;
  });
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-service-line]').forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.serviceLine;
    document.querySelectorAll('[data-service-line]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-service-panel]').forEach(panel => {
      panel.hidden = panel.dataset.servicePanel !== selected;
    });
  });
});
