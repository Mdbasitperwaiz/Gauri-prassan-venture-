/**
 * GAURI PRASSAN — Shared JavaScript
 * Gauriprassan Ventures Private Limited
 * Premium Corporate Website 2026
 */

/* ── Configuration ────────────────────────────────────────── */
const GP_CONFIG = {
  // IMPORTANT: Replace with client-approved WhatsApp number (digits only, with country code)
  // Example: "919334166175" for +91 9334166175
  WHATSAPP_NUMBER: "919334166175",
  PHONE_1: "+91 9334166175",
  EMAIL: "gauriprassanventures@gmail.com",
  ADDRESS: "Ground Floor, Hanuman Nagar, Ward No. 4, Block-Arrah, Near Overbridge, Milki Anaith, Arrah, Bhojpur, Bihar – 802301",
  // NOTE: Confirm exact map location with client before publishing
  MAPS_URL: "https://www.google.com/maps/search/Hanuman+Nagar+Ward+4+Arrah+Bhojpur+Bihar/@25.5501,84.6600,14z",
  MAPS_EMBED: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28898.82!2d84.6500!3d25.5501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d40ae8b0ef039%3A0x87b3a66df0dda862!2sArrah%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890",
};

/* ── Hiring Announcement Bar ──────────────────────────────── */
(function initHiringBar() {
  var bar = document.getElementById('hiring-bar');
  var closeBtn = document.getElementById('close-hiring-bar');
  if (!bar) return;

  // Check if previously dismissed in this session
  if (sessionStorage.getItem('gp_hiring_bar_dismissed') === 'true') {
    document.body.classList.remove('has-hiring-bar');
    bar.style.display = 'none';
  } else {
    document.body.classList.add('has-hiring-bar');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      document.body.classList.remove('has-hiring-bar');
      bar.style.display = 'none';
      sessionStorage.setItem('gp_hiring_bar_dismissed', 'true');
    });
  }

  // If visiting with ?type=hiring or clicking Apply Now on contact page, pre-fill form
  if (window.location.search.indexOf('type=hiring') !== -1) {
    var catSelect = document.getElementById('gf-category');
    if (catSelect) {
      catSelect.value = 'Recruitment & Job Application';
    }
    var msgInput = document.getElementById('gf-message');
    if (msgInput && (!msgInput.value || msgInput.value.trim() === '')) {
      msgInput.value = 'I am writing to enquire / apply for open job positions in Bihar. My preferred district among the 13 active hiring locations (Bhojpur, Arwal, Patna, Jehanabad, Rohtas, Kaimur, Nawada, Saran, Gopalganj, Gaya, Siwan, Buxar, Aurangabad) is: ';
    }
    // Scroll smoothly to form if on contact page
    setTimeout(function() {
      var formElem = document.getElementById('general-enquiry-form');
      if (formElem) {
        formElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 400);
  }
})();

/* ── Navbar ────────────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const drawer = document.querySelector('.navbar__drawer');
  if (!navbar) return;

  // Scroll-based background
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      const isOpen = navbar.classList.toggle('navbar--open');
      drawer.classList.toggle('navbar__drawer--open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on drawer link click
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.classList.remove('navbar--open');
        drawer.classList.remove('navbar__drawer--open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navbar.classList.remove('navbar--open');
        drawer.classList.remove('navbar__drawer--open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Active link highlight (supports both .html and clean URLs)
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  var currentSlug = currentPath.split('/').pop().replace(/\.html$/, '') || 'index';
  document.querySelectorAll('.navbar__link, .navbar__drawer-link').forEach(function (link) {
    var rawHref = link.getAttribute('href') || '';
    if (rawHref.startsWith('#')) return;
    var linkPath = rawHref.split('#')[0].replace(/\/$/, '').replace(/^\//, '');
    var linkSlug = linkPath.split('/').pop().replace(/\.html$/, '') || 'index';
    if (currentSlug === linkSlug) {
      link.classList.add('navbar__link--active');
    }
  });
})();

/* ── Scroll Reveal ─────────────────────────────────────────── */
(function initScrollReveal() {
  var elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  // Reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  document.documentElement.classList.add('js-ready');

  if (!('IntersectionObserver' in window)) {
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });

  elements.forEach(function (el) {
    observer.observe(el);
  });

  // Safety fallback: reveal all content after 600ms
  setTimeout(function () {
    elements.forEach(function (el) {
      el.classList.add('visible');
    });
  }, 600);
})();

/* ── Smooth Scroll for Anchor Links ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      var top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});

/* ── Form Validation Utilities ─────────────────────────────── */
var FormValidator = {
  isValidPhone: function (v) {
    return /^[6-9]\d{9}$/.test(v.replace(/[\s\-+]/g, '').replace(/^91/, ''));
  },
  isValidEmail: function (v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  },
  showError: function (fieldId, msg) {
    var ctrl = document.getElementById(fieldId);
    var err = document.getElementById(fieldId + '-error');
    if (ctrl) ctrl.classList.add('error');
    if (err) { err.textContent = msg; err.classList.add('visible'); }
  },
  clearError: function (fieldId) {
    var ctrl = document.getElementById(fieldId);
    var err = document.getElementById(fieldId + '-error');
    if (ctrl) { ctrl.classList.remove('error'); ctrl.classList.add('valid'); }
    if (err) { err.textContent = ''; err.classList.remove('visible'); }
  },
  clearAll: function (formEl) {
    formEl.querySelectorAll('.form-control').forEach(function (c) {
      c.classList.remove('error', 'valid');
    });
    formEl.querySelectorAll('.form-error').forEach(function (e) {
      e.textContent = '';
      e.classList.remove('visible');
    });
  },
  getValue: function (id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }
};

/* ── WhatsApp Helper ───────────────────────────────────────── */
function openWhatsApp(message) {
  var num = GP_CONFIG.WHATSAPP_NUMBER || '919334166175';
  var defaultGreeting = 'Hello Gauri Prassan, I would like to enquire about your services.';
  var text = (typeof message === 'string' && message.trim().length > 0) ? message : defaultGreeting;
  var encoded = encodeURIComponent(text);
  var url = 'https://wa.me/' + num + '?text=' + encoded;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ── General Enquiry Form ──────────────────────────────────── */
(function initGeneralForm() {
  var form = document.getElementById('general-enquiry-form');
  if (!form) return;

  // Live validation
  ['gf-name', 'gf-mobile', 'gf-email', 'gf-category', 'gf-message'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('blur', function () { validateGeneralField(id); });
      el.addEventListener('input', function () {
        if (el.classList.contains('error')) validateGeneralField(id);
      });
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    FormValidator.clearAll(form);
    var valid = true;

    if (!FormValidator.getValue('gf-name')) {
      FormValidator.showError('gf-name', 'Please enter your full name.');
      valid = false;
    } else { FormValidator.clearError('gf-name'); }

    var mob = FormValidator.getValue('gf-mobile');
    if (!mob) {
      FormValidator.showError('gf-mobile', 'Please enter your mobile number.');
      valid = false;
    } else if (!FormValidator.isValidPhone(mob)) {
      FormValidator.showError('gf-mobile', 'Please enter a valid 10-digit Indian mobile number.');
      valid = false;
    } else { FormValidator.clearError('gf-mobile'); }

    var em = FormValidator.getValue('gf-email');
    if (em && !FormValidator.isValidEmail(em)) {
      FormValidator.showError('gf-email', 'Please enter a valid email address.');
      valid = false;
    } else if (em) { FormValidator.clearError('gf-email'); }

    if (!FormValidator.getValue('gf-category') || FormValidator.getValue('gf-category') === '') {
      FormValidator.showError('gf-category', 'Please select an enquiry category.');
      valid = false;
    } else { FormValidator.clearError('gf-category'); }

    if (!FormValidator.getValue('gf-message')) {
      FormValidator.showError('gf-message', 'Please enter your message.');
      valid = false;
    } else { FormValidator.clearError('gf-message'); }

    if (!valid) return;

    var name = FormValidator.getValue('gf-name');
    var mobile = FormValidator.getValue('gf-mobile');
    var email = FormValidator.getValue('gf-email') || 'Not provided';
    var category = FormValidator.getValue('gf-category');
    var message = FormValidator.getValue('gf-message');

    var wa = '📋 *New General Enquiry — Gauri Prassan*\n\n'
      + '*Name:* ' + name + '\n'
      + '*Mobile:* ' + mobile + '\n'
      + '*Email:* ' + email + '\n'
      + '*Enquiry Category:* ' + category + '\n\n'
      + '*Message:*\n' + message + '\n\n'
      + '_Source: Website Contact Page_';

    openWhatsApp(wa);

    // Show confirmation
    var btn = form.querySelector('[type="submit"]');
    if (btn) {
      var orig = btn.innerHTML;
      btn.innerHTML = '✓ Opening WhatsApp…';
      btn.classList.add('btn--loading');
      setTimeout(function () {
        btn.innerHTML = orig;
        btn.classList.remove('btn--loading');
      }, 3000);
    }
  });

  function validateGeneralField(id) {
    var v = FormValidator.getValue(id);
    if (id === 'gf-name') {
      if (!v) FormValidator.showError(id, 'Full name is required.');
      else FormValidator.clearError(id);
    }
    if (id === 'gf-mobile') {
      if (!v) FormValidator.showError(id, 'Mobile number is required.');
      else if (!FormValidator.isValidPhone(v)) FormValidator.showError(id, 'Enter a valid 10-digit mobile number.');
      else FormValidator.clearError(id);
    }
    if (id === 'gf-email' && v) {
      if (!FormValidator.isValidEmail(v)) FormValidator.showError(id, 'Enter a valid email address.');
      else FormValidator.clearError(id);
    }
    if (id === 'gf-category') {
      if (!v) FormValidator.showError(id, 'Please select a category.');
      else FormValidator.clearError(id);
    }
    if (id === 'gf-message') {
      if (!v) FormValidator.showError(id, 'Message is required.');
      else FormValidator.clearError(id);
    }
  }
})();

/* ── ICT Lab Enquiry Form ──────────────────────────────────── */
(function initIctForm() {
  var form = document.getElementById('ict-enquiry-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    FormValidator.clearAll(form);
    var valid = true;
    var requiredFields = [
      { id: 'ict-institution', msg: 'Institution name is required.' },
      { id: 'ict-district',    msg: 'District is required.' },
      { id: 'ict-state',       msg: 'State is required.' },
      { id: 'ict-contact',     msg: 'Contact person name is required.' },
      { id: 'ict-mobile',      msg: 'Mobile number is required.' },
      { id: 'ict-type',        msg: 'Please select an enquiry type.' },
      { id: 'ict-status',      msg: 'Please select existing lab status.' },
    ];

    requiredFields.forEach(function (f) {
      if (!FormValidator.getValue(f.id)) {
        FormValidator.showError(f.id, f.msg);
        valid = false;
      } else {
        FormValidator.clearError(f.id);
      }
    });

    var mob = FormValidator.getValue('ict-mobile');
    if (mob && !FormValidator.isValidPhone(mob)) {
      FormValidator.showError('ict-mobile', 'Enter a valid 10-digit mobile number.');
      valid = false;
    }

    var em = FormValidator.getValue('ict-email');
    if (em && !FormValidator.isValidEmail(em)) {
      FormValidator.showError('ict-email', 'Enter a valid email address.');
      valid = false;
    }

    if (!valid) return;

    var institution = FormValidator.getValue('ict-institution');
    var district    = FormValidator.getValue('ict-district');
    var state       = FormValidator.getValue('ict-state');
    var contact     = FormValidator.getValue('ict-contact');
    var mobile      = FormValidator.getValue('ict-mobile');
    var email       = FormValidator.getValue('ict-email') || 'Not provided';
    var type        = FormValidator.getValue('ict-type');
    var status      = FormValidator.getValue('ict-status');
    var additional  = FormValidator.getValue('ict-additional') || 'None';

    var wa = '🏫 *New ICT Lab Enquiry — Gauri Prassan*\n\n'
      + '*Institution:* ' + institution + '\n'
      + '*District:* ' + district + '\n'
      + '*State:* ' + state + '\n'
      + '*Contact Person:* ' + contact + '\n'
      + '*Mobile:* ' + mobile + '\n'
      + '*Email:* ' + email + '\n'
      + '*Enquiry Type:* ' + type + '\n'
      + '*Existing Lab Status:* ' + status + '\n\n'
      + '*Additional Requirements:*\n' + additional + '\n\n'
      + '_Source: Website ICT Lab Enquiry Form_';

    openWhatsApp(wa);

    var btn = form.querySelector('[type="submit"]');
    if (btn) {
      var orig = btn.innerHTML;
      btn.innerHTML = '✓ Opening WhatsApp…';
      btn.classList.add('btn--loading');
      setTimeout(function () {
        btn.innerHTML = orig;
        btn.classList.remove('btn--loading');
      }, 3000);
    }
  });
})();

/* ── Current Year in Footer ────────────────────────────────── */
document.querySelectorAll('.js-year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
